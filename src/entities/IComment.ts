export default interface IComment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
  isNew?: boolean;
  isMine?: boolean;
}
