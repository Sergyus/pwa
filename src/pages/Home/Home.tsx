import React from 'react';
import Title from '@components/Title';
// import pic from '@assets/img/qwe.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import styles from './home.module.css';

export default function Home(): JSX.Element {
  const { t } = useTranslation(['menu']);

  return (
    <div className={styles.homePage}>
      <Title title={t('home')} />
      <h1>{t('translation:React')}</h1>
      {/*<img src={pic} alt="pic" />*/}

      <br />
      <br />

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            WELCOME
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            asperiores, aut beatae blanditiis cupiditate dolore dolorum ea esse
            eum explicabo harum incidunt laudantium maxime nam necessitatibus
            nobis non obcaecati odio porro possimus quam, quisquam ratione
            repudiandae tempora tenetur ullam voluptatibus voluptatum. Ab
            accusamus aliquid asperiores beatae consequatur consequuntur culpa
            cumque delectus doloremque enim excepturi facilis, harum ipsam,
            maiores minima minus molestiae numquam odio optio placeat quaerat
            quo quod quos rem sed sequi tempora ut? Asperiores eius eum facere
            fugiat, illo incidunt, ipsa laborum laudantium magnam maxime minima
            necessitatibus nihil nisi quis suscipit temporibus voluptatum. Ab ad
            autem beatae, commodi consectetur corporis cumque cupiditate
            deserunt distinctio ea eligendi esse est ex facilis inventore ipsa
            laboriosam laudantium magnam maxime molestiae nesciunt nisi odit
            officiis praesentium quaerat quasi quis ratione reprehenderit rerum
            vel veniam voluptas voluptate voluptatem? Debitis dignissimos
            doloremque eos error et eveniet iure iusto maiores neque! Aspernatur
            eaque enim natus qui.
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            asperiores, aut beatae blanditiis cupiditate dolore dolorum ea esse
            eum explicabo harum incidunt laudantium maxime nam necessitatibus
            nobis non obcaecati odio porro possimus quam, quisquam ratione
            repudiandae tempora tenetur ullam voluptatibus voluptatum. Ab
            accusamus aliquid asperiores beatae consequatur consequuntur culpa
            cumque delectus doloremque enim excepturi facilis, harum ipsam,
            maiores minima minus molestiae numquam odio optio placeat quaerat
            quo quod quos rem sed sequi tempora ut? Asperiores eius eum facere
            fugiat, illo incidunt, ipsa laborum laudantium magnam maxime minima
            necessitatibus nihil nisi quis suscipit temporibus voluptatum. Ab ad
            autem beatae, commodi consectetur corporis cumque cupiditate
            deserunt distinctio ea eligendi esse est ex facilis inventore ipsa
            laboriosam laudantium magnam maxime molestiae nesciunt nisi odit
            officiis praesentium quaerat quasi quis ratione reprehenderit rerum
            vel veniam voluptas voluptate voluptatem? Debitis dignissimos
            doloremque eos error et eveniet iure iusto maiores neque! Aspernatur
            eaque enim natus qui.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
