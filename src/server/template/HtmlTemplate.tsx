import React, { ReactElement } from 'react';

type Html = {
  scripts?: Array<ReactElement>;
  styles?: Array<string> | Array<ReactElement>;
  links?: Array<ReactElement>;
  css?: ReactElement;
};

export default function HtmlTemplate({
  children,
  scripts,
  styles,
  links,
  css,
}: React.PropsWithChildren<Html>): JSX.Element {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>React Starter Pack</title>
        {links}
        {styles?.join('')}
        {css}
      </head>
      <body>
        <div id="root">{children}</div>
        {scripts}
      </body>
    </html>
  );
}
