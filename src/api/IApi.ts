import IPost from "../entities/IPost";
import IComment from "../entities/IComment";
import IUser from "../entities/IUser";

export default interface IApi {
  getPostById(id: string): Promise<IPost>;
  getUserById(id: string): Promise<IUser>;
  addComment(id: string, name: string, email: string, body: string): Promise<IComment>;
  deleteComment(id: string): Promise<{ status: string | number }>;
}
