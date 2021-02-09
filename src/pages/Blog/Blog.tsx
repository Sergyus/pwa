import React, { useEffect, useState } from 'react';
import Title from '@components/Title';
import MediaCard from '@components/UI/MediaCard';
import { Grid, NoSsr } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import PostService from '@modules/Post';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { PlatformService } from '@modules/Platform';

function Blog(): JSX.Element {
  const [skeletons] = useState(Array.from(Array(3).keys()));
  const { t } = useTranslation(['menu']);
  const { isClient } = PlatformService;

  useEffect(() => {
    PostService.getPosts();
  }, []);

  function addNew() {
    const newPost: PostType = {
      id: Math.random().toString(36).substring(7),
      title: Math.random().toString(36).substring(7),
      body: 'Post body',
    };
    PostService.add(newPost);
  }

  function remove(id: string) {
    PostService.remove(id);
  }

  return (
    <>
      <Title title={t('blog')} />
      <div onClick={addNew}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>

      <Grid container spacing={1}>
        {!PostService.posts.length &&
          isClient &&
          skeletons.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <NoSsr>
                <Skeleton height={180} />
              </NoSsr>
            </Grid>
          ))}

        {PostService.posts.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <MediaCard {...item} remove={remove} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default observer(Blog);
