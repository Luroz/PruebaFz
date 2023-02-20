import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { isTablet, isMobile, isBrowser } from 'react-device-detect';
import useAxios from 'axios-hooks'
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';

const DetailsView = () => {

  const { id } = useParams();

  const [{ data, loading, error }] = useAxios(
    `http://localhost:3000/ott/contents/details/${id}`
  )

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    toast.error('Hubo un error mostrando la data 😲 ', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const imageType = () => {
    if (isMobile) {
      return 'square';
    }

    if (isTablet) {
      return 'medium';
    }

    return 'backdrop';
  };

  return (
    <Box
      width={'100%'}
      height="100%"
      style={{
        height: `${isBrowser ? 'calc(100vh - 217px)' : 'calc(50vh - 66px)'}`,
        backgroundImage: `linear-gradient(0deg, rgba(9,9,9,0.70) 0%, rgba(133,132,132,0.50) 50%, rgba(227,226,226,0) 100%), url("https://mychannel.nunchee.tv/api/assets/images/view/${data.data.images[0]._id
          }?type=${imageType()}&scale=70&placeholder=true")`,
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        padding: `${isBrowser ? '5rem' : '2rem'}`,
      }}
    >
      <Box position={'absolute'} bottom={isBrowser ? '5rem' : '2rem'}>
        <Typography variant="h4" color={'white'} marginBottom="1rem">
          {data.data.title.original}
        </Typography>
        <Box width={isBrowser ? '50%' : '100%'} marginBottom="1rem">
          <Typography variant="p" color="#d1d1d1" lineHeight={'1.5'}>
            {data.data.description.plain.original}
          </Typography>
        </Box>
        <ToastContainer />
      </Box>
    </Box >
  );
};

export default DetailsView;