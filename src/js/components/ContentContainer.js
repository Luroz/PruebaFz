import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { isTablet, isMobile, isBrowser } from 'react-device-detect';
import { Link } from 'react-router-dom';

const ContentContainer = ({ content }) => {
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
        backgroundImage: `linear-gradient(0deg, rgba(9,9,9,0.70) 0%, rgba(133,132,132,0.50) 50%, rgba(227,226,226,0) 100%), url("https://mychannel.nunchee.tv/api/assets/images/view/${content.images[0]._id
          }?type=${imageType()}&scale=70&placeholder=true")`,
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        padding: `${isBrowser ? '5rem' : '2rem'}`,
      }}
    >
      <Box position={'absolute'} bottom={isBrowser ? '5rem' : '2rem'}>
        <Typography variant="h4" color={'white'} marginBottom="1rem">
          {content.title.original}
        </Typography>
        <Box width={isBrowser ? '50%' : '100%'} marginBottom="1rem">
          <Typography variant="p" color="#d1d1d1" lineHeight={'1.5'}>
            {content.description.plain.original}
          </Typography>
        </Box>
        <Button autoCapitalize='false'>
          <Link style={{ textDecoration: 'none', color: '#eb0f37' }} to={`${content._id}`}>
            Ver mas...
          </Link>
        </Button>

      </Box>
    </Box >
  );
};

export default ContentContainer;
