import React from 'react';
import ErrorFallback from '@components/ErrorFallback/ErrorFallback';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from '@components/Layout';
import { config } from '@router/config';

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
