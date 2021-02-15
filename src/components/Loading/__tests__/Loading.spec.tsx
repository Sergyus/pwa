import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '..';

describe('<Loading/>', () => {
  it('should renders', () => {
    const { asFragment } = render(<Loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
