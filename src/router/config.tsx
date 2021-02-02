import { RouterConfigType } from './typings';
import PostService from '@modules/Post';
import { Redirect } from 'react-router-dom';
import React from 'react';
import App from '../app';
import {
  Home,
  Blog,
  About,
  Article,
  Ui,
  NotFound,
  Account,
  Pwa,
  Apollo,
} from '@pages/index';

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
        path: '/404',
        name: '404',
        component: NotFound,
      },
      {
        path: '*',
        name: '404',
        // eslint-disable-next-line react/display-name
        render: (): JSX.Element => <Redirect to="/404" />,
      },
    ],
  },
];
