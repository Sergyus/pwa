import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Layout from '../Layout';

describe('<Layout />', () => {
  it('should render with children', () => {
    const CONTENT = 'content';
    const { asFragment } = render(
      <MemoryRouter>
        <Layout>
          <div>{CONTENT}</div>
        </Layout>
      </MemoryRouter>,
    );
    expect(screen.getByText(CONTENT)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
