import React from 'react';
import { add_counter } from '../actions/counters';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AddButton = ({ dispatch }) => (
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab
      color='neutral'
      onClick={() => {
        dispatch(add_counter());
      }}>
      <AddIcon />
    </Fab>
  </Box>
);

export default connect()(AddButton);
