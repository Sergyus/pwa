import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Remove';

type Params = {
  remove?: (id: string) => void;
};

export default function MediaCard(props: Params & PostType): JSX.Element {
  const { remove, id, title, body } = props;
  const history = useHistory();

  function onSelect() {
    history.push(`/blog/${id}`);
  }

  function onRemove() {
    if (remove) {
      remove(id);
    }
  }

  return (
    <Card>
      <div onClick={onRemove}>
        <Fab color="secondary" size="small" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <CardActionArea onClick={onSelect}>
        <CardContent style={{ height: '180px' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
