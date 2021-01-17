import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

export default function MediaCard(props: PostType): JSX.Element {
  const history = useHistory();

  function onSelect() {
    history.push(`/blog/${props.id}`);
  }

  return (
    <Card onClick={onSelect}>
      <CardActionArea>
        <CardContent style={{ height: '180px' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
