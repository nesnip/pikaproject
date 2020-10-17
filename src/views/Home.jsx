import React, { useState } from 'react';
import Header from '../components/HeaderHome';
import Footer from '../components/Footer';
import '../css/Home.css';

const Home = () => {
    return(
        <>
        <Header />
            <section className="form-container">
                <h2 className="home-title">Converter Ñawiriy</h2>
            </section>
        <Footer />
        </>
    )
};

export default Home;