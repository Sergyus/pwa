import React from 'react';
import Title from '../components/Title';
import pic from './../assets/img/pwa.jpg';
import pic2 from './../assets/img/pwa2.jpg';
import pic3 from './../assets/img/pwa3.jpg';

export default function Pwa(): JSX.Element {
  return (
    <>
      <Title title="PWA" />
      <img style={{ width: '100%' }} src={pic} alt="pic" />
      <br />
      <br />
      <img style={{ width: '100%' }} src={pic2} alt="pic" />
      <br />
      <br />
      <img style={{ width: '100%' }} src={pic3} alt="pic" />
    </>
  );
}
