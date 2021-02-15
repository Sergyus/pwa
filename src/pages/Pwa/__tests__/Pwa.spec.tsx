import React from 'react';
import { render } from '@testing-library/react';
import Pwa from '../Pwa';

describe('<Pwa/>', () => {
  it('should renders', () => {
    const { asFragment } = render(<Pwa />);
    expect(asFragment()).toMatchSnapshot();
  });
});
