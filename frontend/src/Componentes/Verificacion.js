import React from "react";
import "../Style/Propietario.css";
import { Link, whitRouter } from "react-router-dom";

export const Verificacion = () => {
  return (
    <div className="Verificacion">
      <div className="container card py-5">
        <div class="card-body">
          <h4 className="list-group">Publica tu Vivienda </h4>
        </div>
        <div className="container center">
          <img src="../img/logo.jpg" alt="C.D.A C13" />
        </div>
        <div class="input-group">
          <input type="text" aria-label="1" class="form-control" />         
           <input type="text" aria-label="2" class="form-control" />
          <input type="text" aria-label="3" class="form-control" />
           <input type="text" aria-label="4" class="form-control" />
        </div>
        <Link className="button" to="/Propietario">
        <button className="btn btn-outline-danger btn-block">
          Aun no he recibido el codigo
        </button>
        </Link>
        <Link className="button" to="/Formulario">
        <button className="btn btn-outline-danger btn-block">Confirmar</button>
        </Link>
        
      </div>
    </div>
  );
};
