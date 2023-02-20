import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { ToastContainer, toast } from 'react-toastify';
import ContentContainer from '../components/ContentContainer';
import useAxios from 'axios-hooks'
import CircularProgress from '@mui/material/CircularProgress';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ContentView = () => {
  const [{ data, loading, error }] = useAxios(
    'https://mychannel.nunchee.tv/api/generic/playlists/details/62ed078f15f4850026b193bd?itemsPerPage=10'
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

  const items = data.data.items;

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation

        slidesPerView={1}
        style={{ height: '79vh', "--swiper-navigation-color": "#eb0f37", "--swiper-pagination-color": "#eb0f37" }}
        rewind
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <ContentContainer content={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ToastContainer />
    </>
  );
};

export default ContentView;