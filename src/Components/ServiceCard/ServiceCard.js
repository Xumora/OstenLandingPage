import { faCopy, faPencilRuler, faToolbox, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';


const data = [
    { icon: faPencilRuler, name: "ПРОЕКТИРОВАНИЕ", text: "ПОДРОБНО ПРО ПРОЕКТИРОВАНИЕ" },
    { icon: faToolbox, name: "МОНТАЖ", text: "ПОДРОБНО ПРО МОНТАЖ" },
    { icon: faCopy, name: "ЗАПАСНЫЕ ЧАСТИ", text: "ПОДРОБНО ПРО ЗАПАСНЫЕ ЧАСТИ" },
    { icon: faTools, name: "РЕМОНТ", text: "ПОДРОБНО ПРО РЕМОНТ" }
]
const ServiceCard = () => {

    return (
        <div className="row">
            {
                data.map((v, i) => {
                    return <div className="col-12 col-sm-6 col-lg-3 mt-4">
                        <Link to="/" className="d-block border p-5 text-center s-card">
                            <FontAwesomeIcon icon={v.icon} className="display-4" />
                            <h3 className="my-4">{v.name}</h3>
                            <p className="m-0">{v.text}</p>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default ServiceCard
