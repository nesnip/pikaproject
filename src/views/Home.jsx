import React, { useState } from 'react';
import Header from '../components/HeaderHome';
import Footer from '../components/Footer';
import ResultadoTabla from '../components/ResultadoTabla';
import '../css/Home.css';

const Home = () => {
    return(
        <>
        <Header />
            <section className="">
                <h2 className="home-title">Converter Ñawiriy</h2>
                {/* Tabla */}
                <ResultadoTabla />
            </section>
        <Footer />
        </>
    )
};

export default Home;