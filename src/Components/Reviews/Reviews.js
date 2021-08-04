import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"
import SwiperCore, {
    Scrollbar
} from 'swiper/core';
SwiperCore.use([Scrollbar]);

const data = [
    { name: "JOHN DOE", job: "PROPERTY INVESTOR", text: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов." },
    { name: "Abdulaziz", job: "Algorismic Company", text: "Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum." },
    { name: "Author", job: "CYBERSPACE DEVELOPMENT CENTER", text: "Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney." },
]

const Reviews = () => {
    return (
        <div>
            <Swiper scrollbar={{ "hide": true }} className="mySwiper">
                {
                    data.map((v, i) => {
                        return <SwiperSlide className="my-4">
                            <h4 className="text-white sectionTitle">{v.name} <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "white", display: "inline-block", margin: "0.4rem 0" }}></span> {v.job}</h4>
                            <p className="text-white fw-bold fs-5">{v.text}</p>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Reviews
