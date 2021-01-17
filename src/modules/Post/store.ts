import { action, makeObservable, observable } from 'mobx';

/**
 * Post Store
 */
export default class PostStore {
  @observable public posts: PostType[] = [];

  constructor() {
    makeObservable(this);
  }

  @action public setPostsState = (posts: PostType[]): void => {
    this.posts = posts;
  };
}
