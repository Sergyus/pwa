import { Request, Response } from 'express';
import { matchRoutes } from 'react-router-config';
import { IRoute } from 'router/typings';
import { config } from 'router/consts';

type FnType = (req: Request, res: Response) => Promise<unknown> | void;

/**
 * Load Initial Data
 */
export const loadInitialData: FnType = (req, res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const branch = matchRoutes<{ [k: string]: string }, IRoute>(config, req.path);
  const promises = branch.map(({ route, match }) => {
    if (route.fetchData) {
      return Promise.all(
        route.fetchData({
          params: match.params,
          getState: {}, //store.getState,
          req,
          res,
        }),
        //.map((item: Action) => store.dispatch(item)),
      );
    }

    return Promise.resolve(null);
  });

  return Promise.all(promises);
};
