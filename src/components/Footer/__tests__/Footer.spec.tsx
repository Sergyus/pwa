import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('should render component', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
