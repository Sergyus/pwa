import ApiService from '@modules/Api';
import { GetUsersQueryVariables } from '@api/queries/methods/GetUser';

class UsersService {
  protected readonly api = ApiService;

  /**
   * Get Rates
   */
  public getUsers(params: GetUsersQueryVariables) {
    return this.api.getUsers(params);
  }
}

export default new UsersService();
