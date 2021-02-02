import PostStore from './store';
import ApiService from '../Api';

/**
 * Post Service
 */
class PostService extends PostStore {
  protected readonly api = ApiService;

  public getPosts(from = 1, to = 10) {
    const params = `posts?_start=${from}&_end=${to}`;
    return this.api.request<PostType[]>(params);
  }

  public getPost(id: string): Promise<PostType> {
    return this.api.request<PostType>(`posts/${id}`);
  }
}

export default new PostService();
