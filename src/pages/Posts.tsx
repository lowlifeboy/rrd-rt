import React, {useEffect, useState} from "react";
import {PostsStyles} from "../styles/PostsStyles";
import PostItem from "../components/PostItem";
import {useGetPostsQuery} from "../api/partialApis/postsAPI";
import {useSearchParams} from 'react-router-dom';
import {useGetUsersQuery} from "../api/partialApis/usersAPI";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {setFilter} from "../slices/postsSlice";
import {Puff} from "react-loader-spinner";
import Pagination from "../components/Pagination";

const Posts: React.FC = () => {
  const dispatch = useAppDispatch();
  const {filter} = useAppSelector((state) => state.posts);

  const [page, setPage] = useState<number | null>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterListOpen, setFilterListOpen] = useState(false);

  const { data: postsList, error: postsError, isLoading: postsIsLoading } = useGetPostsQuery({page: page || 1, authorId: filter});
  const { data: usersList, error: usersError, isLoading: usersIsLoading } = useGetUsersQuery();

  useEffect(() => {
    const pageValue = searchParams.get('page');

    if (!pageValue || +pageValue < 1) {
      setPage(1);
    } else {
      setPage(+pageValue);
    }
  }, [])

  useEffect(() => {
    setSearchParams({page: page ? `${page}` : "1"})
  }, [page])

  if (postsError || usersError) {
    return <p>Something went wrong!</p>
  }

  function handleSelectFilter(value: string | undefined) {
    dispatch(setFilter(value));
    setFilterListOpen(false);
    setPage(1);
  }

  function handleSetPage(number: number) {
    setPage(number);
  }

  return (
    <PostsStyles>
        {postsIsLoading || usersIsLoading
          ? (
            <div className="loader">
              <div className="container">
                <Puff color="#5E71DD" height={80} width={80} />
              </div>
            </div>
          ) : postsList && usersList && (
            <>
              <div className="filterContainer">
                <div className="container">
                  <div className="filter">
                    <span>Filter posts by author</span>
                    <div className={filter ? "authorsList opened" : "authorsList"}>
                      <button className={filter ? "selectedFilter" : ""} type="button" onClick={() => setFilterListOpen(true)}>
                        {filter ? usersList.find((user) => user.id === filter)!.name : "All posts"}
                      </button>

                      {filterListOpen && (
                        <div className="buttonsList">
                          <button type="button" onClick={() => handleSelectFilter(undefined)}>All posts</button>

                          {usersList.map((author) => (
                            <button
                              type="button"
                              onClick={() => handleSelectFilter(author.id)}
                            >
                              {author.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="posts">
                <div className="container">
                  {postsList!.map((post) => (
                    <PostItem
                      key={post.id}
                      title={post.title}
                      body={post.body}
                      id={post.id}
                      author={usersList.find((author) => author.id === post.userId)!}
                    />))
                  }
                </div>
              </div>
            </>
          )
        }

        {postsList && page && (
          <div className="paginationContainer">
            {/*Так як відповідь бекенда має лише список постів сторінки і не має ключу total, то кількість сторінок захардкожена*/}
            <Pagination page={page} handleSetPage={handleSetPage} quantity={!!filter ? 1 : 10} />
          </div>
        )}
      </PostsStyles>
  );
}

export default Posts;
