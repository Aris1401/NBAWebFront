import React from 'react';
import Navigation from "../components/Navigation";
import Photo from "../components/Photo";
import Entete from "../components/Entete";
import AutresSports from '../components/AutresSports';
import Tableau from '../components/Tableau';

const Home =()=>{
    return(
        <div className="home">
            <Entete />
            <AutresSports/>
            <Photo />
            {/* <Navigation /> */}
            <Tableau />

        </div>
    );
};
export default Home;

