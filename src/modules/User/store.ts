import { User } from '@api/generated/types';
import { action, makeObservable, observable } from 'mobx';
import { GetUsersQuery } from '@api/queries/methods/GetUser';
import { rehydrateStore } from '@store/utils';

/**
 * Users Store
 */
export default class UsersStore {
  @observable public users: User[] = [];
  @observable public loading = false;
  @observable public test = false;

  constructor() {
    makeObservable(this);
    Object.assign(this, rehydrateStore('UsersStore'));
  }

  @action public setUsers({ users }: GetUsersQuery): void {
    if (!this.users.length) {
      this.users = users.data as User[];
    }
  }

  @action public testAction(): void {
    this.test = !this.test;
  }
}
