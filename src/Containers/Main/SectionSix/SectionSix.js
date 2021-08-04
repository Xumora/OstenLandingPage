import React from 'react'
import Reviews from '../../../Components/Reviews/Reviews'

const SectionSix = () => {
    return (
        <section id="main_sectionSix" className="py-5">
            <div className="container py-5 text-center">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-white fw-bold sectionTitle">Отзывы клиентов</h1>
                        <Reviews />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix;
