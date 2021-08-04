import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const SectionOne = () => {
    return (
        <section id="main_sectionOne" className="py-5">
            <div className="container py-5 mb-5">
                <div className="row">
                    <Zoom>
                        <div className="col-12 col-md-10">
                            <h1 className="text-white display-3 fw-bold">
                                «Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии
                            </h1>
                            <p className="text-white fw-bold fs-4">Компания «Osten» была основана в 2019 году!</p>
                            <Link to="/" className="mt-3 btn btn-warning fw-bold text-white">ПОДРОБНЕЕ</Link>
                        </div>
                    </Zoom>
                </div>
            </div>
        </section>
    )
}

export default SectionOne
