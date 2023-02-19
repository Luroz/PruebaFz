import React from 'react';
import Navbar from '../components/NavBar';
import CounterList from '../containers/CounterList';
import AddButton from '../components/AddButton';
import Total from '../components/Total';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Footer from '../components/Footer';

export const CounterView = () => (
  <>
    <Navbar />
    <CounterList />
    <AddButton />
    <Divider />
    <Box sx={{ '& > :not(style)': { display: 'flex', justifyContent: 'center', alignItems: 'center' } }} component="span">
      <Total />
    </Box>
    <Footer />
  </>
)
