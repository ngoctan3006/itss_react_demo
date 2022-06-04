import { Divider, Paper, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ja';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStorage from '../../hooks/storage';
import noImage from '../../images/noImage.png';
import useStyles from './styles';

const PostDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts } = useStorage();
  const post = posts.find((post) => post.id === id);

  if (!post) return null;

  const openPost = (id) => {
    navigate(`/posts/${id}`);
    window.scrollTo(0, 0);
  };

  const recommendedPosts = posts.filter(({ id }) => id !== post.id).slice(0, 5);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.content}
          </Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.image || noImage} alt={post.title} />
        </div>
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            お好きな方はこちらもどうぞ:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ id, title, content, image }) => (
              <div
                key={id}
                style={{ margin: '20px', cursor: 'pointer' }}
                onClick={() => openPost(id)}
              >
                <Typography gutterBottom variant="h6">
                  {title.length > 8 ? title.slice(0, 8) + '...' : title}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  {content.length > 65 ? content.slice(0, 65) + '...' : content}
                </Typography>
                <img src={image || noImage} width="200px" alt={title} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
