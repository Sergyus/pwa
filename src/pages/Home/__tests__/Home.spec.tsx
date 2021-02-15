import { render } from '@testing-library/react';
import React from 'react';
import Home from '../Home';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Home />', () => {
  it('should renders', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
