import loadable from '@loadable/component';
import { RouterConfigType } from './typings';
import PostService from '../modules/Post';
import App from '../app';

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
        component: loadable(() => import('../pages/Home')),
      },
      {
        path: '/about',
        name: 'About',
        exact: true,
        component: loadable(() => import('../pages/About')),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: loadable(() => import('../pages/Blog')),
        fetchData: () => [PostService.getPosts()],
      },
      {
        path: '/blog/:id',
        name: 'Article',
        component: loadable(() => import('../pages/Article')),
      },
      {
        path: '/ui',
        name: 'Ui',
        component: loadable(() => import('../pages/Ui')),
      },
      {
        path: '/pwa',
        name: 'Pwa',
        component: loadable(() => import('../pages/Pwa')),
      },
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/account',
        name: 'Account',
        component: loadable(() => import('../pages/Account')),
      },
      {
        path: '*',
        name: '404',
        component: loadable(() => import('../pages/NotFound')),
      },
    ],
  },
];
