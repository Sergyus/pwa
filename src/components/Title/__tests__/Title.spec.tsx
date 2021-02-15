import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '@components/Title';

describe('<Title />', () => {
  it('should render with children props', () => {
    const title = 'Test title';
    const { asFragment } = render(<Title title={title} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
