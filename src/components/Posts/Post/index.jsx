import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import 'moment/locale/ja';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import noImage from '../../../images/noImage.png';
import useStyles from './styles';

const Post = ({ post, setCurrentId, deletePost }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(post.id);
  };

  const openPost = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase component="span" name="test" className={classes.cardAction} onClick={openPost}>
        <CardMedia className={classes.media} image={post.image || noImage} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>

        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {post.title.length > 5 ? post.title.slice(0, 5) + '...' : post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.content.length > 33 ? post.content.slice(0, 33) + '...' : post.content}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="secondary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" /> 削除
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentId(post.id);
          }}
        >
          <EditIcon fontSize="small" /> 編集
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
