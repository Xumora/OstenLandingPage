import React from 'react';
import ServiceCard from '../../../Components/ServiceCard/ServiceCard';

const SectionTwo = () => {
    return (
        <section id="main_sectionTwo" className="py-5 bg-white">
            <div className="container py-5 mb-5 text-center">
                <h1 className="sectionTitle mb-5">Наши услуги</h1>
                <ServiceCard />
            </div>
        </section>
    )
}

export default SectionTwo
