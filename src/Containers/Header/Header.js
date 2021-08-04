import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const data = [
    { name: "ГЛАВНАЯ", to: "/" },
    { name: "О НАС", to: "/about" },
    { name: "ПРОИЗВОДСТВО", to: "/production" },
    { name: "УСЛУГИ", to: "/services" },
    { name: "ПРОДУКЦИЯ", to: "/products" },
    { name: "КОНСТРУКТОР", to: "/constructor" },
    { name: "НОВОСТИ", to: "/news" },
    { name: "КОНТАКТЫ", to: "/contacts" },
]
const Header = () => {
    const [menu, setMenu] = useState(true);
    const [selected, setSelected] = useState(0)

    const openMenu = () => {
        setMenu(!menu);
    }

    return (
        <header className="bg-white sticky-top">
            <div className="container py-2 d-flex justify-content-between align-items-center">
                <Link to="/" className="d-block">
                    <img src="https://osten.vercel.app/images/osten.svg" alt="?" className="logo" />
                </Link>
                <button className="btn fs-4" onClick={openMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={`py-3 px-5 m-0 bg-white ${menu && "toLeft" || ""}`}>
                    {
                        data.map((v, i) => {
                            return <li><Link to={v.to} className={`mt-3 d-block h-link fw-bold ${selected == i && "text-warning" || ""}`} onClick={() => { setSelected(i); setMenu(true) }}>{v.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header
