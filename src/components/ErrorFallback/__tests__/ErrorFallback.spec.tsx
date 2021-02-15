import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorFallback from '../ErrorFallback';

describe('<ErrorFallback />', () => {
  it('should rendered', function () {
    const message = new Error('ERROR MESSAGE');
    render(<ErrorFallback error={message} resetErrorBoundary={jest.fn()} />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
});
