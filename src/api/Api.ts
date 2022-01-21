import IApi from "./IApi";
import IPost from "../entities/IPost";
import IComment from "../entities/IComment";
import IUser from "../entities/IUser";

export default class Api implements IApi {
  private baseUrl: string = "https://jsonplaceholder.typicode.com";

  private async fetchData(path: string, requestOptions: any): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, requestOptions);
      return response.json();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("FETCH ERROR:", e);
    }
  }

  private async getData(path: string): Promise<any> {
    const requestOptions: {
      method: string;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: "GET",
      redirect: "follow",
    };
    return this.fetchData(path, requestOptions);
  }

  private async postData(
    path: string,
    data?: any
  ): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: {
      method: string;
      headers: Headers;
      body: string;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return this.fetchData(path, requestOptions);
  }

  private async deleteData(path: string): Promise<any> {
    const requestOptions: {
      method: string;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: "DELETE",
      redirect: "follow",
    };

    return this.fetchData(path, requestOptions);
  }

  public async getPostById(id: string): Promise<IPost> {
    return this.getData(`/posts/${id}?_embed=comments`);
  }

  public async getUserById(id: string): Promise<IUser> {
    return this.getData(`/users/${id}`);
  }

  public async addComment(id: string, name: string, email: string, body: string): Promise<IComment> {
    return await this.postData(`/posts/${id}/comments`, {name, email, body});
  }

  public async deleteComment(id: string): Promise<{ status: string | number }> {
    return await this.deleteData(`/comments/${id}`);
  }
}
