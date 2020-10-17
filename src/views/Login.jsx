import React, { useState } from 'react';
import Header from '../components/Header';
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
        <>
        <Header />
        <section className="form-container">
            <form className="login-form">
                <h3>Inicia sesión</h3>
                <div>
                <input
                    type="email" 
                    placeholder="Ingresar DNI"
                    value={dni}
                    onChange={handleDni}
                    className="form-control"
                />
                </div>
                <div>
                <input 
                    type="password" 
                    placeholder="Ingresar contraseña"
                    value={password}
                    onChange={handlePassword}
                    className="form-control"
                />
                </div>
                <p><a href="/#">¿Olvidaste tu contraseña?</a></p>
                <button type="submit" class="btn btn-primary">Cancelar</button>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </form>
        </section>
      </>
    )
  };
  
  export default Login;