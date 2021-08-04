import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-12 col-md-4 mt-4">
                        <h4 className="mb-3">О НАС</h4>
                        <p>«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии Компания «Osten» была основана в 2019 году!</p>
                        <h4>МЫ В СОЦ.СЕТЯХ:</h4>
                        <a href="#" className="btn text-white fs-4"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="btn text-white fs-4"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="btn text-white fs-4"><FontAwesomeIcon icon={faTelegram} /></a>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                        <h4 className="mb-3">ПОСЛЕДНИЕ НОВОСТИ</h4>
                        <Link to="/" className="btn d-block text-white text-start p-0 mb-3">ПОСТРОЕН НОВЫЙ ЛИФТ</Link>
                        <Link to="/" className="btn d-block text-white text-start p-0 mb-3">РЕМОНТ И ОБСЛУЖИВАНИЕ ЭСКАЛАТОРОВ</Link>
                        <Link to="/" className="btn d-block text-white text-start p-0 mb-3">ДИСПЕТЧЕРИЗАЦИЯ</Link>
                    </div>
                    <div className="col-12 col-md-4 mt-4">
                        <h4 className="mb-3">КОНТАКТЫ</h4>
                        <p><span className="fw-bold">Номер телефона: </span>+998 (93) 511-11-17 +998 (91) 791-51-15</p>
                        <p><span className="fw-bold">Электронная почта: </span>info@uzlift.uz</p>
                        <p><span className="fw-bold">Адрес: </span>100077, город Ташкент, улица Мухаммад Юсуф 1А.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
