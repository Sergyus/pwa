import './title.scss';

type Props = {
  title: string;
};

export default function Title(props: Props): JSX.Element {
  return <h1 className="app-title">{props.title}</h1>;
}
