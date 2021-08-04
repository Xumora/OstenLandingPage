import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faListOl, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const data = [
    { icon: faAccusoft, name: "Поиск и инновации", text: "Мы ведем постоянный поиск и внедряем инноваций" },
    { icon: faThumbsUp, name: "Качество и цена", text: "Предложение лифтов и эскалаторов высокого качества по конкурентным ценам" },
    { icon: faUser, name: "Индивидуальный подход", text: "Индивидуальный и гибкий подход к каждому клиенту" },
    { icon: faListOl, name: "Широкий ассортимент", text: "Начиная с решений, оптимизированных для жилых и офисных зданий, заканчивая сложными проектами с эскалаторами и высокоскоростными лифтами" },
    { icon: faCheck, name: "Гибкость", text: "Гибкость технологических решений и собственных прогнозов, ориентированных на потребности каждого здания" },
]

const SectionFive = () => {
    return (
        <section id="main_sectionFive" className="py-5" style={{ backgroundColor: "#F5F5F5" }}>
            <div className="container py-5 mb-5 text-center">
                <h1 className="sectionTitle mb-5">Преимущества</h1>
                <div className="row justify-content-center">
                    {
                        data.map((v, i) => {
                            return <div className="col-12 col-md-4 mt-5">
                                <div className="benefit px-5">
                                    <div className="icon-box rounded-circle bg-white mx-auto d-flex align-items-center justify-content-center text-warning fs-2">
                                        <FontAwesomeIcon icon={v.icon} />
                                    </div>
                                    <h4 className="my-3">{v.name}</h4>
                                    <p>{v.text}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionFive
