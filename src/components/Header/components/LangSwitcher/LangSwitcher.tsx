import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import i18n from 'i18next';
import { LANGUAGES } from '@libs/i18n';

export default function LangSwitcher(): JSX.Element {
  const [anchorLangEl, setAnchorLangEl] = useState<null | HTMLElement>(null);
  const menuId = 'Lang-switcher';
  const isMenuOpen = Boolean(anchorLangEl);

  function handleMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorLangEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorLangEl(null);
  }

  async function changeLanguage(event: React.MouseEvent<HTMLElement>) {
    const lang = (event.target as Element).getAttribute('value');
    if (lang) {
      await i18n.changeLanguage(lang);
    }
    handleMenuClose();
  }

  return (
    <div style={{ marginRight: '10px' }}>
      <IconButton
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <div style={{ fontSize: '18px' }}>
          {i18n.language.toLocaleUpperCase()}
        </div>
      </IconButton>

      <Menu
        anchorEl={anchorLangEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem value={lang} key={lang} onClick={changeLanguage}>
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
