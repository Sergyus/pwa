import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback: FC<FallbackProps> = ({ error }: FallbackProps) => (
  <div className="container">
    <h1>ErrorFallback</h1>
    <p>Something went wrong.</p>
    <pre style={{ color: 'red' }}>{error?.message}</pre>
    <h3>
      <a href="/">back to Home</a>
    </h3>
  </div>
);

export default ErrorFallback;
