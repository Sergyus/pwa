import React from 'react';
import { renderRoutes } from 'react-router-config';
import { IRoute } from '@router/typings';

type RouterAppProps = {
  route: { routes: IRoute[] };
};

export default function App({ route }: RouterAppProps): JSX.Element {
  return <div>{renderRoutes(route.routes)}</div>;
}
