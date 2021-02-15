import React from 'react';
import ReactDOM from 'react-dom';
import App from '../index';
import { config } from '@router/config';
import { IRoute } from '@router/typings';

it('renders App crashing', () => {
  const div = document.createElement('div');
  const _config = (config as unknown) as { routes: IRoute[] };
  ReactDOM.render(<App route={_config} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
