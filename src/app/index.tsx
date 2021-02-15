import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { IRoute } from '@router/typings';

export type RouterAppProps = {
  route: { routes: IRoute[] };
};

export default function App({ route }: RouterAppProps): JSX.Element {
  return <>{renderRoutes(route.routes as RouteConfig[])}</>;
}
