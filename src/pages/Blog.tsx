import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import MediaCard from '../components/UI/MediaCard';
import { Grid } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import PostService from './../modules/Post';

export default function Blog(): JSX.Element {
  const [open, setOpen] = useState(true);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [skeletons] = useState(Array.from(Array(9).keys()));

  useEffect(() => {
    PostService.getPosts().then((posts) => {
      setPosts(posts);
      setOpen(false);
    });
  }, []);

  return (
    <>
      <Title title="Blog" />

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
