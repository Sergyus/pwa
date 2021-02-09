import { action, makeObservable, observable } from 'mobx';
import { rehydrateStore } from '@store/utils';

/**
 * Post Store
 */
export default class PostStore {
  @observable public posts: PostType[] = [];

  constructor() {
    makeObservable(this);
    Object.assign(this, rehydrateStore('PostStore'));
  }

  @action public setPostsStore = (posts: PostType[]): void => {
    if (!this.posts.length) {
      this.posts = posts;
    }
  };

  @action public setPostStore(post: PostType): void {
    this.posts.push(post);
  }

  @action public removePostStore(id: string): void {
    this.posts = this.posts.filter((e) => e.id !== id);
  }
}
