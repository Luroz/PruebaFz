import React from 'react';
import { add_counter } from '../actions/counters';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer, toast } from 'react-toastify';

const AddButton = ({ dispatch }) => (
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
    <Fab
      onClick={() => {
        dispatch(add_counter());
        toast.success('Se ha agregado un nuevo contador! 😲 ', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }}>
      <AddIcon />
    </Fab>
    <ToastContainer />
  </Box>
);

export default connect()(AddButton);
