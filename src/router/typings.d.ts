import { RouteConfig } from 'react-router-config';
import { match } from 'react-router';

type PagesType =
  | 'Home'
  | 'About'
  | 'Blog'
  | 'Article'
  | 'Ui'
  | 'Pwa'
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
  | '/login'
  | '/account'
  | '*';

type FetchDataType = PostType[] | PostType;

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
  fallback?: NonNullable<ReactNode> | null;
  redirect?: PathType;
  private?: boolean;
}

export type RouterConfigType = {
  component: unknown;
  routes: IRoute[];
};
