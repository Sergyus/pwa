import React from 'react';
import { render } from '@testing-library/react';
import Title from '../Title';

describe('<Title />', () => {
  it('should render with children props', () => {
    const title = 'Text title';
    const component = render(<Title title={title} />);
    expect(component.container).toHaveTextContent(title);
    expect(component).toMatchSnapshot();
  });
});
