import React from "react";
import {CommentStyles} from "../styles/CommentStyles";
import TrashIcon from "../assets/images/Trash";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

interface CommentProps {
  id: string;
  name: string;
  email: string;
  body: string;
  isNew: boolean;
  isMine: boolean;
  handleDelete: (id: string) => void;
}

export default function Comment({body, id, email, name, isNew, isMine, handleDelete}: CommentProps) {
  return (
    <CommentStyles>
      {isNew && (
        <div className="isNewStatus" />
      )}
      {isMine && (
        <button className="trash" type="button" onClick={() => handleDelete(id)}>
          <TrashIcon/>
        </button>
      )}

      <div className="commentHeader">
        <span className="name">{name}</span>
        <span className="email">{email}</span>
      </div>

      <div className="commentBody">{capitalizeFirstLetter(body)}</div>
    </CommentStyles>
  );
}
