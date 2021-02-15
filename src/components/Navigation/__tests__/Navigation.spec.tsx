import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '@components/Navigation';
import { MemoryRouter } from 'react-router-dom';
import { headerMenu } from '@components/Navigation/consts';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('<Navigation/>', () => {
  it('should renders', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const menu = screen.getByTestId('menu');
    expect(menu).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render all items', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    const menuItems = screen.getAllByTestId('menuItem');
    expect(menuItems).toHaveLength(headerMenu.length);
  });
});
