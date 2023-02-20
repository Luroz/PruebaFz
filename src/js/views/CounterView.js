import React from 'react';
import CounterList from '../containers/CounterList';
import AddButton from '../components/AddButton';
import Total from '../components/Total';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export const CounterView = () => (
  <>
    <CounterList />
    <AddButton />
    <Divider />
    <Box sx={{ '& > :not(style)': { display: 'flex', justifyContent: 'center', alignItems: 'center' } }} component="span">
      <Total />
    </Box>
  </>
)
