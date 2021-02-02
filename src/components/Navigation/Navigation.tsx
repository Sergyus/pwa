import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './navigation.scss';
import { useTranslation } from 'react-i18next';

export default function Navigation(): JSX.Element {
  const { t } = useTranslation('menu');
  const menu: { name: string; link: string }[] = [
    {
      name: t('home'),
      link: '/',
    },
    {
      name: t('blog'),
      link: '/blog',
    },
    {
      name: t('about'),
      link: '/about',
    },
    {
      name: 'Ui',
      link: '/ui',
    },
    {
      name: 'Pwa',
      link: '/pwa',
    },
    {
      name: 'Apollo',
      link: '/apollo',
    },
  ];
  return (
    <div className="nav-header">
      {menu.map((item) => (
        <Button key={item.name} color="inherit">
          <Link
            style={{ color: '#fff', textDecoration: 'none' }}
            to={item.link}
          >
            {item.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
