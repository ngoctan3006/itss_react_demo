import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import Post from './Post';
import useStyles from './styles';

const Posts = ({ posts, setPosts, setCurrentId, deletePost }) => {
  const classes = useStyles();

  if (!posts.length) return <Paper className={classes.empty}>No posts</Paper>;

  return (
    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={12} md={6} lg={3}>
          <Post
            post={post}
            setPosts={setPosts}
            setCurrentId={setCurrentId}
            deletePost={deletePost}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
