import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

jest.mock('./../../Header', () => ({
  __esModule: true,
  default: function HeaderMock() {
    return <div />;
  },
}));

describe('<Layout />', () => {
  it('should render with children props', () => {
    const component = render(
      <Layout>
        <div id="test" />
      </Layout>,
    );
    expect(component.container.querySelector('div#test')).not.toBeNull();
    expect(component).toMatchSnapshot();
  });
});
