import Title from '@components/Title';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Loading from '@components/Loading';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { UsersService } from '@modules/User';
import { Helmet } from 'react-helmet';

export function Apollo(): JSX.Element {
  useEffect(() => {
    UsersService.getUsers({
      params: { page: 1, limit: 9 },
    });
  }, []);

  function trigger() {
    UsersService.testAction();
  }

  return (
    <>
      <Helmet>
        <title>Apollo page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Title title="Apollo GQL" />
      {UsersService.loading && <Loading />}

      <Button onClick={trigger} variant="contained" color="primary">
        Trigger
      </Button>
      <div>{UsersService.test && 'Trigger'}</div>

      <Grid container spacing={1}>
        {UsersService.users.map((rate) => (
          <Grid key={rate.id} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {rate.name}
                </Typography>
                <div>
                  <strong>username: </strong>
                  {rate.username}
                </div>
                <div>
                  <strong>email: </strong>
                  {rate.email}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default observer(Apollo);
