import React from 'react';
import logoMejorado from '../assets/images/logo-mejorado.png';
import '../css/Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img src={logoMejorado} className="logo-bbva" alt="BBVA"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Crear cuenta</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Ingresar <span class="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;