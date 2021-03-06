import React from "react";

import { Link, whitRouter } from "react-router-dom";

export const Perfil = () => {
  return (
    <div className="Perfil">
      <nav className="navbar navbar-light bg-danger">
        <a className="navbar-brand" href="/">
          <img
            src="../img/logo.jpg"
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          C.D.A C13
        </a>
      </nav>
       <div className=" container py-5">
      <form className="form-signin">
        <div align="center">
          <img
            className="mb-4"
            src="../img/yay.jpg"
            alt=""
            width="72"
            height="72"
          />
        </div>
        <div align="center">
          <h1 className="h3 mb-3 font-weight-normal">Juan Esteban García</h1>

          <h1 className="h3 mb-3 font-weight-normal">
            Ayalanito1123@gmail.com
          </h1>
        </div>
        <Link className="button" to="/Citas">
        <button
          type="button"
          className="btn btn-lg btn-outline-danger btn-block"
        >
          Numero de citas <span className="badge badge-primary">4</span>
        </button>
        </Link>

        <Link className="button" to="/">
        <button
        
          className="btn btn-lg btn-outline-danger btn-block"
          type="submit"
        >
          Cerrar sesión
          
        </button>
       </Link>

      </form>
      </div>
      <div className="nav-scroller py-1 mb-1">
        <nav className="nav d-flex justify-content-between bg-danger">
        <Link className="button" to="/Mapa">
          <a className="p-2 text-white" href="/">
            Ubicacion
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-geo-alt"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                fill-rule="evenodd"
                d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </a>
          </Link>
          
          <Link className="button" to="/Principal">
          <a className="p-2 text-white" href="/">
            Viviendas
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-house-door"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
            </svg>
          </a>
          </Link>
          <Link className="button" to="/Chat">
          <a className="p-2 text-white" href="/">
            Chat
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-chat-dots"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
              />
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          </Link>
          <Link className="button" to="/Perfil">
          <a className="p-2 text-white" href="/">
            Perfil
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-person-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fill-rule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
          </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};
