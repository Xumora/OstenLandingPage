import { faGlobeAsia, faRunning, faSortAmountUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const data = [
    { icon: faSortAmountUp, number: "300", text: "лифтов в год" },
    { icon: faGlobeAsia, number: "2", text: "года на рынке" },
    { icon: faRunning, number: "200", text: "эскалаторов в год" }
]

const SectionThree = () => {
    return (
        <section id="main_sectionThree" className="py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h1 className="text-white fw-bold sectionTitle">Результаты</h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    {
                        data.map((v, i) => {
                            return <div className="col-10 col-md-4 mt-3 text-white">
                                <FontAwesomeIcon icon={v.icon} className="display-5" />
                                <h1 className="display-3 fw-bold my-3">{v.number}</h1>
                                <h3>{v.text}</h3>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionThree
