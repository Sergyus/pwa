import ApiService from '@modules/Api';
import { GetUsersQueryVariables } from '@api/queries/methods/GetUser';
import UsersStore from '@modules/User/store';

/**
 * Users Service
 */
class UsersService extends UsersStore {
  public async getUsers(params: GetUsersQueryVariables) {
    const { data } = await ApiService.getUsers(params);
    this.setUsers(data);
  }
}

export default new UsersService();
