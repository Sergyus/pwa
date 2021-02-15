import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './navigation.scss';
import { useTranslation } from 'react-i18next';
import { headerMenu } from '@components/Navigation/consts';

export default function Navigation(): JSX.Element {
  const { t } = useTranslation('menu');

  return (
    <div data-testid="menu" className="nav-header">
      {headerMenu.map((item) => (
        <Button key={item.name} color="inherit">
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={item.link}
            data-testid="menuItem"
          >
            {t(item.name)}
          </Link>
        </Button>
      ))}
    </div>
  );
}
