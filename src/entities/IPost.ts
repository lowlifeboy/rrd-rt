import IComment from "./IComment";
import IUser from "./IUser";

export default interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
  comments?: IComment[];
  author?: IUser;
}
