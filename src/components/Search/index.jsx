import { AppBar, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

const Search = ({ posts, setSearchData }) => {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const searchPost = () => {
    if (search.trim()) {
      setSearchData(
        posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setSearchData(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      searchPost();
    }
  };
  return (
    <AppBar className={classes.appBarSearch} position="static" color="inherit">
      <TextField
        style={{ margin: '10px 0' }}
        name="search"
        variant="outlined"
        label="場所の名前"
        fullWidth
        onKeyPress={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={searchPost} color="primary" variant="contained">
        探す
      </Button>
    </AppBar>
  );
};

export default Search;
