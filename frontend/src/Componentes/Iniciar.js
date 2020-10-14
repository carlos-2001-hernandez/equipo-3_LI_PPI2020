import React from "react";
import "../Style/Iniciar.css";
import { Link, whitRouter } from "react-router-dom";
export const Iniciar = () => {
  return (
    <div className="Iniciar text-center">
      <form className="form-signin">
  <img className="mb-4" src="/img/logo.jpg" alt="" width="72" height="72"/>
  <h1 className="h3 mb-3 font-weight-normal">Iniciar Sesion</h1>
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" id="inputEmail" className="form-control" placeholder="Correo" required="" autofocus=""/>
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required=""/>
  <Link className="button" to="/Mapa">
  <button className="btn btn-outline-danger  btn-block" type="submit">Iniciar</button>
  </Link>
  <button className="btn btn-outline-danger  btn-block" type="submit">Iniciar con Facebook</button>
  <button className="btn btn-outline-danger  btn-block" type="submit">Iniciar con google
  </button>
</form>
    </div>
  );
};
