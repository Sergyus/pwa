import { RouteConfig } from 'react-router-config';
import { match } from 'react-router';

type PagesType =
  | 'Home'
  | 'About'
  | 'Blog'
  | 'Article'
  | 'Ui'
  | 'Pwa'
  | 'Apollo'
  | 'Login'
  | 'Account'
  | '404';

type PathType =
  | '/'
  | '/about'
  | '/blog'
  | '/blog/:id'
  | '/ui'
  | '/pwa'
  | '/apollo'
  | '/login'
  | '/account'
  | '/404'
  | '*';

type FetchDataType = PostType[] | PostType | void;

type FetchPropsType = {
  params: match['params'];
  getState: unknown;
  req: Express.Request;
  res: Express.Response;
};

export interface IRoute extends RouteConfig {
  name: PagesType;
  path: PathType | PathType[];
  fetchData?: (data: FetchPropsType) => Promise<FetchDataType>[];
  routes?: IRoute[];
  inMenu?: boolean;
}

export type RouterConfigType = {
  component: unknown;
  routes: IRoute[];
};
