import styles from './styles.module.scss';
import React from 'react';

type Props = {
  title: string;
};

export default function Title(props: Props): JSX.Element {
  return <h1 className={styles.title}>{props.title}</h1>;
}
