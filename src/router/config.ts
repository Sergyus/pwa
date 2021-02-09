import { RouterConfigType } from './typings';
import PostService from '@modules/Post';
import App from '../app';
import {
  About,
  Account,
  Apollo,
  Article,
  Blog,
  Home,
  NotFound,
  Pwa,
  Ui,
} from '@pages/index';
import { UsersService } from '@modules/User';

/**
 * Router Config
 */
export const config: RouterConfigType[] = [
  {
    component: App,
    routes: [
      {
        path: '/',
        name: 'Home',
        exact: true,
        component: Home,
        inMenu: true,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        inMenu: true,
      },
      {
        path: '/blog',
        name: 'Blog',
        exact: true,
        component: Blog,
        fetchData: () => [PostService.getPosts()],
        inMenu: true,
      },
      {
        path: '/blog/:id',
        name: 'Article',
        component: Article,
      },
      {
        path: '/ui',
        name: 'Ui',
        component: Ui,
        inMenu: true,
      },
      {
        path: '/pwa',
        name: 'Pwa',
        component: Pwa,
        inMenu: true,
      },
      {
        path: '/apollo',
        name: 'Apollo',
        component: Apollo,
        fetchData: () => [
          UsersService.getUsers({ params: { page: 1, limit: 9 } }),
        ],
        inMenu: true,
      },
      {
        path: '/login',
        name: 'Login',
        component: Home,
      },
      {
        path: '/account',
        name: 'Account',
        component: Account,
      },
      {
        path: '*',
        name: '404',
        component: NotFound,
      },
    ],
  },
];
