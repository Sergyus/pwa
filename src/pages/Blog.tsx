import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import MediaCard from '../components/UI/MediaCard';
import { Grid } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import PostService from './../modules/Post';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function Blog(): JSX.Element {
  const [open, setOpen] = useState(true);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [skeletons] = useState(Array.from(Array(3).keys()));

  useEffect(() => {
    PostService.getPosts(1, 4).then((posts) => {
      setPosts(posts);
      setOpen(false);
    });
  }, []);

  function addNew() {
    const newPost: PostType = {
      id: Math.random().toString(36).substring(7),
      title: Math.random().toString(36).substring(7),
      body: 'body',
    };
    setPosts([...posts, newPost]);
  }

  function remove(id: string) {
    const updPosts = posts.filter((e) => e.id !== id);
    setPosts(updPosts);
  }

  return (
    <>
      <Title title="Blog" />
      <div onClick={addNew}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

      <Grid container spacing={1}>
        {open &&
          skeletons.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <Skeleton height={180} />
            </Grid>
          ))}

        {posts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <MediaCard {...item} remove={remove} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
