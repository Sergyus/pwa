import Title from '../components/Title';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Avatar, Chip } from '@material-ui/core';

export default function About(): JSX.Element {
  return (
    <>
      <Title title="About" />

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            TECHNOLOGY STACK
          </Typography>
          <br />

          <div>
            <Chip label="REACT" color="primary" avatar={<Avatar>R</Avatar>} />
            <Chip label="Typescript" color="primary" />
            <Chip label="MobX" color="primary" />
            <Chip label="Material UI" color="primary" />
            <Chip label="i18n" color="primary" />
          </div>
          <br />
          <div>
            <Chip
              label="HTML/SCSS"
              color="primary"
              avatar={<Avatar>H</Avatar>}
            />
            <Chip label="Responsive" color="primary" />
            <Chip label="Animation" color="primary" />
          </div>
          <br />
          <hr />
          <br />

          <div>
            <Chip label="Node.js" color="primary" avatar={<Avatar>N</Avatar>} />
            <Chip label="Express" color="primary" />
            <Chip label="Morgan" color="primary" />
            <Chip label="SSR" color="primary" />
            <Chip label="PWA" color="primary" />
          </div>
          <br />
          <div>
            <Chip label="GRAPHQL" color="primary" avatar={<Avatar>G</Avatar>} />
            <Chip label="WS" color="primary" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
