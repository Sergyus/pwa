import React from 'react';
import styles from './styles.module.scss';

export default function Loading(): JSX.Element {
  return (
    <div className={styles.Loading}>
      <p>Loading...</p>
    </div>
  );
}
