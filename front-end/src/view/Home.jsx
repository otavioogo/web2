import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.png";

import "../styles/home.css";

function Home() {
  return (
    <div
      className="div-principal"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="header">
        <Link to="/" className="logo">
          Anotacoes
        </Link>
        <Link to="/login">
          <button className="main-acessar">Acessar</button>
        </Link>
      </div>
      <div className="principal-content">
        <div>
          <h2>
            <b style={{ fontSize: 32 }}>
             Bem vindo!<br /> 
            </b>
          </h2>
          
        </div>
       
      </div>
      <div className="footer-text">
      </div>
      <div className="footer-content">
        <div className="secondary__items">
          <p>UTFR - 2022 - Eng de Software</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
