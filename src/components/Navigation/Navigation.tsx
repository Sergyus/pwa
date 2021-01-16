import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './navigation.scss';

export default function Navigation(): JSX.Element {
  const menu: { name: string; link: string }[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Ui',
      link: '/ui',
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
