import { action, makeObservable, observable } from 'mobx';
import { rehydrateState } from '@store/utils';

/**
 * Post Store
 */
export default class PostStore {
  @observable public posts: PostType[] = [];

  constructor() {
    makeObservable(this);
    Object.assign(this, rehydrateState('PostStore'));
  }

  @action public setPosts = (posts: PostType[]): void => {
    if (!this.posts.length) {
      this.posts = posts;
    }
  };
}
