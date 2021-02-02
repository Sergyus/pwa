import Title from '@components/Title';
import React, { useEffect, useState } from 'react';
import { UserService } from '@modules/User';
import { User } from '@api/generated/types';
import Loading from '@components/Loading';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

export default function Apollo(): JSX.Element {
  useEffect(() => {
    getRates();
  }, []);

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const getRates = async () => {
    const { loading, data } = await UserService.getUsers({
      params: { page: 1, limit: 9 },
    });
    setUsers(data.users.data as User[]);
    setLoading(loading);
  };

  return (
    <>
      <Title title="Apollo GQL" />
      {loading && <Loading />}

      <Grid container spacing={1}>
        {users.map((rate) => (
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
