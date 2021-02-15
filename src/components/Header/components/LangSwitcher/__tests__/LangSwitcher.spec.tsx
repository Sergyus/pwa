import React from 'react';
import { render, screen } from '@testing-library/react';
import LangSwitcher from '@components/Header/components/LangSwitcher';
import userEvent from '@testing-library/user-event';
import i18n from 'i18next';

describe('<LangSwitcher />', () => {
  it('renders <LangSwitcher />', () => {
    const { asFragment } = render(<LangSwitcher />);
    const btn = screen.getByTestId('langBtn');
    expect(btn).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have correct lang in button', () => {
    render(<LangSwitcher />);
    const lang = i18n.language.toLocaleUpperCase();
    const btn = screen.getByTestId('langBtn');
    expect(btn).toHaveTextContent(lang);
  });

  it('should render menu on click', () => {
    render(<LangSwitcher />);
    const btn = screen.getByTestId('langBtn');
    const menu = screen.getByTestId('langMenu');
    userEvent.click(btn);
    expect(menu).toBeVisible();
  });

  // it('should have all select items', () => {
  //   render(<LangSwitcher />);
  //   const menu = screen.getByTestId('langMenu');
  // });

  // it('should be change lang on select', () => {
  //   render(<LangSwitcher />);
  //   const lang = i18n.language.toLocaleUpperCase();
  //   const btn = screen.getByTestId('langBtn');
  //   const langItems = screen.getAllByTestId('langItem');
  //   // const changeLanguage = jest.fn();
  //
  //   userEvent.click(langItems);
  //
  //   expect(btn).toHaveTextContent(lang);
  //   // expect(changeLanguage).toHaveBeenCalledTimes(0);
  // });
});
