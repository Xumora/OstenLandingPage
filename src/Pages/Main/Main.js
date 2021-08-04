import React from 'react';
import SectionFive from '../../Containers/Main/SectionFive/SectionFive';
import SectionFour from '../../Containers/Main/SectionFour/SectionFour';
import SectionOne from '../../Containers/Main/SectionOne/SectionOne';
import SectionSeven from '../../Containers/Main/SectionSeven/SectionSeven';
import SectionSix from '../../Containers/Main/SectionSix/SectionSix';
import SectionThree from '../../Containers/Main/SectionThree/SectionThree';
import SectionTwo from '../../Containers/Main/SectionTwo/SectionTwo';
import './Main.css';

const Main = () => {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </div>
    )
}

export default Main
