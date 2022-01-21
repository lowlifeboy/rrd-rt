import {PostItemStyles} from "../styles/PostItemStyles";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import IUser from "../entities/IUser";
import React from "react";

interface PostItemProps {
  title: string;
  body: string;
  id?: string;
  author: IUser;
}

export default function PostItem({body, title, id, author}: PostItemProps) {
  return (
    <PostItemStyles href={id ? `/post/${id}` : '#'}>
      {author && (
        <div className="postHeader">
          <span className="name">{capitalizeFirstLetter(author.name)}</span>
          <span className="email">{author.email.toLowerCase()}</span>
        </div>
      )}
      <div className="titleContainer">
        <h3>{capitalizeFirstLetter(title)}</h3>
      </div>
      <p>{capitalizeFirstLetter(body)}</p>
    </PostItemStyles>
  );
}
