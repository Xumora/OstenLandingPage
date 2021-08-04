import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import './Lifts.css';

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

const Lifts = () => {
    return (
        <div>
            <Swiper slidesPerView={1} spaceBetween={10} loop={true} pagination={{
                "clickable": true
            }} className="mySwiper" breakpoints={{
                "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 2,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 4,
                    "spaceBetween": 50
                }
            }} className="mySwiper py-5">
                <SwiperSlide>
                    <div className="lift">
                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg" alt="?" className="h-100" />
                        <h4 className="py-2 text-center text-white m-0" style={{ backgroundColor: "#112044" }}>OSTEN L1</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lift">
                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="?" className="h-100" />
                        <h4 className="py-2 text-center text-white m-0" style={{ backgroundColor: "#112044" }}>OSTEN L1</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lift">
                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg" alt="?" className="h-100" />
                        <h4 className="py-2 text-center text-white m-0" style={{ backgroundColor: "#112044" }}>OSTEN L1</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lift">
                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2.jpg" alt="?" className="h-100" />
                        <h4 className="py-2 text-center text-white m-0" style={{ backgroundColor: "#112044" }}>OSTEN L1</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lift">
                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/OSTEN-L2.jpg" alt="?" className="h-100" />
                        <h4 className="py-2 text-center text-white m-0" style={{ backgroundColor: "#112044" }}>OSTEN L1</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lift">
                        <img src="https://orzu-tehnopark.s3.amazonaws.com/oston/images/2020/10/16/mls2_heV74LX.jpg" alt="?" className="h-100" />
                        <h4 className="py-2 text-center text-white m-0" style={{ backgroundColor: "#112044" }}>OSTEN L1</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Lifts;
