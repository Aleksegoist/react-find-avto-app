import React from 'react';
import styles from './Find.module.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find Your Car</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            //when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            //when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            //when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              make='Mercedes-Benz'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnMlMjBhdWRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Audi'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1603831126198-a53fd2a50da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FycyUyMGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='BMW'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1582467029213-ce71667c2e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZCUyMGZvY3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Ford'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1592229147598-1a7f376eee35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhcnMlMjB2dyUyMHBhc3NhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='VW'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1652741938599-42b4aa7f1259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhcnMlMjByYW5nZSUyMHJvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Range Rover'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1643928342164-2f89c3701f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxjYXJzJTIwbWF6ZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              make='Mazda'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGNhcnMlMjB2b2x2b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Volvo'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1552849397-7a2d7864a9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnMlMjBob25kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              make='Honda'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image='https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnMlMjBqZWVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              make='Jeep'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
