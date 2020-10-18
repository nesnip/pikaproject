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

    /* var formdata = new FormData();
    formdata.append("archivo", fileInput.files[0], "login.php");

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://df18a7d32901.ngrok.io/upload/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error)); */
    
    const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
    }

    const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f));
    files.forEach((f) => {
        var formdata = new FormData();
        formdata.append("archivo", f.file);
        console.log(f.file.name, f);
        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://df18a7d32901.ngrok.io/upload/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    });
    // allFiles.forEach(f => f.remove())
    }

    return(
        <div className="home-container">
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
        </div>
    )
};

export default Home;