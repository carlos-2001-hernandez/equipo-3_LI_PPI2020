import React from "react";
import { Link, whitRouter } from 'react-router-dom';

export const Quienes = () => {
  return (
    <div className="Quienes">
        
      <div className=" Menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <Link className="navbar-brand" to="/">
            C.D.A C13
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/Quienes">
                  Quienes somos<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Soy propietario<span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Que buscas"
                aria-label="Search"
              />
              <button className="btn btn-outline-light " type="submit">
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </div>
      <img src="./img/bien.jpg" className="d-block w-100" alt="..." />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Visión</h2>
            <p>
            Es un servicio para las personas de la comuna 13 sector 20 de julio que desean buscar vivienda de manera fácil y rápida se llama C.D.A C13 y es una plataforma web que permitirá buscar y escoger comodidades de acuerdo a las necesidades de las familias. A diferencia de las agencias de arrendamiento que solo están en estratos altos nosotros nos enfocaremos en sectores de estrato bajo nuestro producto ayudara a familias a buscar vivienda en cualquier ubicación del sector de forma rápida
            </p>
          </div>
          <div className="col-md-4">
            <h2>Alcance</h2>
            <p>
            Con este proyecto buscamos ayudar a la comunidad a la busque de vivienda para que no se tengan que desplazar a buscar vivienda, si no que desde el dispositivo móvil puedan buscar las comodidades y la ubicación de la vivienda rápida sin caminar mucho.
            </p>
          </div>
          <div className="col-md-4">
            <h2>Problema</h2>
            <p>
            Dificultad para hallar casas disponibles en los barrios de estrato 1 y 2. La falta de tiempo y la ubicación de las casas,implica retrasos significativos para las personas que tiene que desocupar rápido y resulta necesario desplazarse a barrios desconocidos a buscar casas de precios mas altos que no se acomodan a sus ingresos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
