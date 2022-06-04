import { Container, Grid, Grow, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import useStorage from '../../hooks/storage';
import Form from '../Form';
import Paginate from '../Pagination';
import Posts from '../Posts';
import Search from '../Search';
import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [page, setPage] = useState(1);
  const classes = useStyles();

  const { posts, setPosts, addPost, updatePost, deletePost } = useStorage();

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts
              posts={searchData || posts.slice((page - 1) * 8, page * 8)}
              setPosts={setPosts}
              setCurrentId={setCurrentId}
              deletePost={deletePost}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Search posts={posts} setSearchData={setSearchData} />
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              posts={posts}
              setPosts={setPosts}
              addPost={addPost}
              updatePost={updatePost}
            />
            <Paper className={classes.pagination} elevation={6}>
              <Paginate page={page} count={Math.floor(posts.length / 8) + 1} setPage={setPage} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
