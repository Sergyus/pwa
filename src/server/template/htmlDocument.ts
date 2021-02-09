type Props = {
  html: string;
  apolloState: string;
  helmet: {
    htmlAttributes: {
      toString: () => void;
    };
    title: string;
    meta: {
      toString: () => string;
    };
    link: {
      toString: () => string;
    };
    bodyAttributes: {
      toString: () => string;
    };
  };
  extractor: {
    getScriptTags: () => void;
  };
};

export const getHtmlDocument = ({
  html,
  apolloState,
  helmet,
  extractor,
}: Props): string => `
<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()} lang="ru">
    <head>
        ${helmet.title.toString()}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${helmet.meta.toString()}
        <link rel="icon" href="/static/favicon.ico" />
        ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <script type="text/javascript">window.__APOLLO_STATE__=${JSON.stringify(
          apolloState,
        )}</script>
        ${extractor.getScriptTags()}
    </body>
</html>
`;
