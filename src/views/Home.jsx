import React, { useState, useCallback } from 'react';
// import {useDropzone} from 'react-dropzone';
// import Dropzone from 'react-dropzone';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import Header from '../components/HeaderHome';
import Footer from '../components/Footer';
import '../css/Home.css';

const Home = () => {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' }
    }
    
    const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
    }

    return(
        <>
        <Header />
        <h3 className="home-title">Ñawiriy<br/>Converter</h3>
        <div className="dropzone-container">
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                styles={{ dropzone: { minHeight: 300, maxHeight: 350 } }}
            />
        </div>
        <Footer />
        </>
    )
};

export default Home;