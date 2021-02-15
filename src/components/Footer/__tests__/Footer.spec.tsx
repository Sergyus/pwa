import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';
import { MemoryRouter } from 'react-router-dom';

describe('<Footer />', () => {
  it('should render component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
