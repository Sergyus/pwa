import Title from '../components/Title';
import pic from './../assets/img/qwe.jpg';

export default function Home(): JSX.Element {
  return (
    <>
      <Title title="Home" />
      <img src={pic} alt="pic" />
    </>
  );
}
