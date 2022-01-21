import React, {useEffect, useState} from "react";
import {PostStyles} from "../styles/PostStyles";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {addAuthorData, addComment, deleteCommentById, getPostById} from "../slices/postSlice";
import {useParams} from "react-router-dom";
import Comment from "../components/Comment";
import {Api} from "../api";
import {Puff} from "react-loader-spinner";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const Post: React.FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {post, status: postStatus} = useAppSelector((state) => state.currentPost);

  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [isLoadingAuthor, setIsLoadingAuthor] = useState(false);
  const [showAddCommentForm, setShowAddCommentForm] = useState(false);
  const [commentAuthorName, setCommentAuthorName] = useState("");
  const [commentAuthorEmail, setCommentAuthorEmail] = useState("");
  const [newCommentBody, setNewCommentBody] = useState("");

  useEffect(() => {
    if (params.id) {
      dispatch(getPostById(params.id));
    }
  }, []);

  useEffect(() => {
    if (post) {
      setIsLoadingAuthor(true);
      Api.getUserById(post.userId)
        .then((res) => {
          dispatch(addAuthorData(res));
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          setIsLoadingAuthor(false);
        });
    }
  }, [postStatus])

  function closeAddCommentForm() {
    setShowAddCommentForm(false);
    setCommentAuthorName("");
    setCommentAuthorEmail("");
    setNewCommentBody("");
  }

  async function commentPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoadingComments(true);
    try {
      const response = await Api.addComment(params.id!, commentAuthorName, commentAuthorEmail, newCommentBody);
      if (response.id) {
        dispatch(addComment({...response, isNew: true, isMine: true}));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingComments(false);
    }
    closeAddCommentForm();
  }

  async function handleDeleteComment(id: string) {
    try {
      await Api.deleteComment(id);
      dispatch(deleteCommentById(id));
    } catch (e) {
      console.log(e);
    }
  }

  if (postStatus === "failed") {
    return <p>Something went wrong!</p>
  }

  return (
    <PostStyles>
        {postStatus === "loading"
          ? (
            <div className="loader">
              <div className="container">
                <Puff color="#5E71DD" height={80} width={80} />
              </div>
            </div>
          )
          : post && (
            <>
              <div className="post">
                <div className="container">
                  <div className="postContent">
                    {post.author && (
                      <div className="postHeader">
                        <span className="name">{capitalizeFirstLetter(post.author.name)}</span>
                        <span className="email">{post.author.email.toLowerCase()}</span>
                      </div>
                    )}
                    <h2>{capitalizeFirstLetter(post.title)}</h2>
                    <p>{capitalizeFirstLetter(post.body)}</p>
                  </div>
                </div>
              </div>

              <div className="comments">
                <div className="container">
                  <div className="commentsContainer">
                    <div className="commentsHeader">
                      <h3>Comments</h3>
                      {!showAddCommentForm && <button type="button" onClick={() => setShowAddCommentForm(true)}>+ Add comment</button>}
                    </div>

                    {showAddCommentForm && (
                      <form className="addCommentForm" onSubmit={(event) => commentPost(event)}>
                        <h4>New comment</h4>
                        <input
                          type="text"
                          placeholder="Your name"
                          value={commentAuthorName}
                          onChange={(event) => setCommentAuthorName(event.target.value)}
                          required/>
                        <input
                          type="email"
                          placeholder="Your email"
                          value={commentAuthorEmail}
                          onChange={(event) => setCommentAuthorEmail(event.target.value)}
                          required/>
                        <textarea
                          placeholder="Your comment"
                          value={newCommentBody}
                          onChange={(event) => setNewCommentBody(event.target.value)}
                          required/>
                        <div className="buttons">
                          <button type="submit">{isLoadingComments ? <Puff color="#FFF" height={20} width={20} /> : "Submit"}</button>
                          <button type="button" onClick={closeAddCommentForm}>Cancel</button>
                        </div>
                      </form>
                    )}

                    {post.comments!.map((comment) => {
                      return (
                        <Comment
                          id={comment.id}
                          name={comment.name}
                          email={comment.email}
                          body={comment.body}
                          isNew={!!comment.isNew}
                          isMine={!!comment.isMine}
                          handleDelete={handleDeleteComment}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </>
          )
        }
    </PostStyles>
  );
}

export default Post;
