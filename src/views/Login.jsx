import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Login.css';

const Login = () => {
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
  
    const handleDni = (e) => {
        setDni(e.target.value);
    };
  
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
  
    return (
        <div className="login-view">
        <Header />
        <section className="form-container">
            <form className="login-form">
                <h3 className="login-title">Ñawiriy</h3>
                <div>
                    <input
                        type="email" 
                        placeholder="Ingresar DNI"
                        value={dni}
                        onChange={handleDni}
                        className="form-control login-input"
                    />
                    <input 
                        type="password" 
                        placeholder="Ingresar contraseña"
                        value={password}
                        onChange={handlePassword}
                        className="form-control login-input"
                    />
                </div>
                <div class="form-group form-check login-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Recordar documento</label>
                </div>
                <div className="button-container">
                    <button type="submit" class="btn btn-primary login-btn">Cancelar</button>
                    <button type="submit" class="btn btn-primary login-btn">Ingresar</button>
                </div>
            </form>
        </section>
        <Footer />
      </div>
    )
  };
  
  export default Login;