import { Pagination } from '@material-ui/lab';
import React from 'react';
import useStyle from './styles';

const Paginate = ({ page, count, setPage }) => {
  const classes = useStyle();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={count}
      page={page}
      variant="outlined"
      color="primary"
      onChange={(e, page) => setPage(page)}
    />
  );
};

export default Paginate;
