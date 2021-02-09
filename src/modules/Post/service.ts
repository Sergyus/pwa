import PostStore from './store';
import ApiService from '../Api';

/**
 * Post Service
 */
class PostService extends PostStore {
  public async getPosts(from = 1, to = 10) {
    const params = `posts?_start=${from}&_end=${to}`;
    const posts = await ApiService.request<PostType[]>(params);
    this.setPosts(posts);
    console.log('getPosts');
  }

  public getPost(id: string): Promise<PostType> {
    return ApiService.request<PostType>(`posts/${id}`);
  }
}

export default new PostService();
