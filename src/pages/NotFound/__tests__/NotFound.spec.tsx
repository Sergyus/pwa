import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../NotFound';

describe('<NotFound />', () => {
  it('should renders', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
