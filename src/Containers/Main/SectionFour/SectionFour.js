import React from 'react'
import { Button } from 'reactstrap'
import Lifts from '../../../Components/Lifts/Lifts'

const SectionFour = () => {
    return (
        <section id="main_sectionFour" className="py-5 bg-white">
            <div className="container py-5 mb-5 text-center">
                <h1 className="sectionTitle mb-5">Кабины лифтов</h1>
                <Lifts />
                <Button color="warning" className="text-white fw-bold">ВСЯ ПРОДУКЦИЯ</Button>
            </div>
        </section>
    )
}

export default SectionFour
