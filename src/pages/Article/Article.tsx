import Title from '@components/Title';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import PostService from '@modules/Post';
import React, { useEffect, useState } from 'react';
import { CircularProgress, createStyles, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import Skeleton from 'react-loading-skeleton';
import MediaCard from '@components/UI/MediaCard';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      'height': '630px',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

function Article(): JSX.Element {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostType>();
  const [open, setOpen] = useState(true);
  const [posts] = useState<PostType[]>([]);
  const [skeletons] = useState(Array.from(Array(3).keys()));

  useEffect(() => {
    PostService.getPost(id).then((r) => {
      setPost(r);
    });
    PostService.getPosts(+id, +id + 3);
    setOpen(false);
  }, [id]);

  if (post === undefined) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Title title="Article" />

      <Card>
        <CardContent style={{ height: '180px' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {post?.title.toLocaleUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post?.body}
          </Typography>
        </CardContent>
      </Card>

      <br />
      <h2>Recommended...</h2>

      <Grid container spacing={1}>
        {open &&
          skeletons.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <Skeleton height={180} />
            </Grid>
          ))}

        {posts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <MediaCard {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default observer(Article);
