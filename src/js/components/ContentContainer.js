import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const ContentContainer = ({ content }) => {

  return (
    <Box
      width={'100%'}
      height="100%"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(9,9,9,0.70) 0%, rgba(133,132,132,0.50) 50%, rgba(227,226,226,0) 100%), url("https://mychannel.nunchee.tv/api/assets/images/view/61099b95b373df001a72d4a1?type=backdrop&scale=70&placeholder=true")`,
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <Box position={'absolute'} bottom="0" paddingX="12rem" paddingY="10rem">
        <Typography variant="h4" color={'white'} marginBottom="1rem">
          {content.title.original}
        </Typography>
        <Box width={'50%'} marginBottom="1rem">
          <Typography variant="p" color="#d1d1d1" lineHeight={'1.5'}>
            {content.description.plain.original}
          </Typography>
        </Box>
        <Button autoCapitalize='false'>Ver mas...</Button>

      </Box>
    </Box >
  );
};

export default ContentContainer;
