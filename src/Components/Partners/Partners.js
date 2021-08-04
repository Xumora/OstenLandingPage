import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

const Partners = () => {
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
                    <div>
                        <img src="./Images/partner1.png" alt="?" className="w-100" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./Images/partner3.png" alt="?" className="w-100" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./Images/partner4.png" alt="?" className="w-100" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./Images/partner5.png" alt="?" className="w-100" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./Images/partner6.png" alt="?" className="w-100" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./Images/partner7.png" alt="?" className="w-100" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Partners
