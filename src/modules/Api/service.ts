import { CONFIG } from './consts';
import fetch from 'isomorphic-fetch';

/**
 * Api Service
 */
class ApiService {
  private readonly url = CONFIG.url;

  public async request<T>(source: string): Promise<T> {
    const response = await fetch(this.url + source);
    return await response.json();
  }
}

export default new ApiService();
