import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { config } from './consts';
import Layout from 'components/Layout';

/**
 * App Router
 */
export default function Router(): JSX.Element {
  const _config = config as RouteConfig[];
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>{renderRoutes(_config)}</Layout>
    </ErrorBoundary>
  );
}
