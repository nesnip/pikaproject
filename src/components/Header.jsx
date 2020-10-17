import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <nav class="header navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse btn-container" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="font-color" href="#">Crear cuenta<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <span class="font-color">|</span>
                </li>
                <li class="nav-item">
                    <a class="font-color" href="#">Ingresar</a>
                </li>
            </ul>
        </div>
        </nav>
    )
};

export default Header;