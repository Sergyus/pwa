import './title.scss';
import React from 'react';

type Props = {
  title: string;
};

export default function Title(props: Props): JSX.Element {
  return <h1 className="index-title">{props.title}</h1>;
}
