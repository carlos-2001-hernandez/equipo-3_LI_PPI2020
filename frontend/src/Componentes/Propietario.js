import React from "react";
import "../Style/Propietario.css";
import { Link, whitRouter } from "react-router-dom";

export const Propietario = () => {
  return (
    <div className="Propietario">
      <div className="container card  py-5">
        <div class="card-body">
          <h4 className="list-group">Publica tu Vivienda </h4>
        </div>
        <div className="container center">
          <img src="../img/logo.jpg" alt="C.D.A C13" />
        </div>
        <div className="card-footer">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                +57
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Número Celular"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </div>
        </div>
        <Link className="button" to="/Verificacion">
        <button className="btn btn-outline-danger btn-block">
          Recibir Codigo por sms
        </button>
        </Link>
        <Link className="button" to="/">
        <button className="btn btn-outline-danger btn-block">
          Regresar
        </button>
        </Link>
      </div>
    </div>
  );
};
