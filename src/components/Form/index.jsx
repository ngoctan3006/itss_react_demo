import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { genId } from '../../utils';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId, posts, addPost, updatePost }) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: '',
  });

  const post = posts.find((post) => post.id === currentId);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      // update post
      updatePost(currentId, postData);
      clear();
    } else {
      // create post
      const newPost = { id: genId(), ...postData, createdAt: new Date() };
      addPost(newPost);
      clear();
    }
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: '',
      content: '',
      image: '',
    });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">場所を{currentId ? '編集' : '作成'}する</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="場所の名前"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="簡単な説明"
          fullWidth
          multiline
          minRows={4}
          value={postData.content}
          onChange={(e) => setPostData({ ...postData, content: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          確認する
        </Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>
          クリア
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
