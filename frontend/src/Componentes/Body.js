import React from "react";
import "../Style/Body.css";
import { Link, whitRouter } from 'react-router-dom';


export const Body = () => {
  

  return (
    <div className="Body">
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
                <Link  className="nav-link" to="/Propietario">
                  Soy propietario<span className="sr-only">(current)</span>
                </Link>
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
      <div className="Carrousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/bien.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/img/logo.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/img/imk.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div align="center">
      <Link className="button" to="/Registrocliente">
        <button className="btn btn-outline-danger  my-sm-0" type="submit">
          Registrarme
        </button>
      </Link>
      </div>
      
      <div className="card">
        <img src="./img/casa.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casa Unifamiliar</h5>
          <p className="card-text">
            casa Unifamiliar 3 habitaciones 2 baños un garaje esta totalmente
            acabada
          </p>
        </div>
      </div>
      <div className="card">
        <img src="./img/217813699.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casa </h5>
          <p className="card-text">
            casa 2 habitaciones 1 baños un garaje esta bien acreditada
          </p>
        </div>
      </div>
      <div className="card">
        <img src="./img/casas.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casa 1er piso</h5>
          <p className="card-text">
            casa 4 habitaciones 3 baños un patio esta totalmente acabada
          </p>
        </div>
      </div>
      <div className="card">
        <img src="./img/vv.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casa Unifamiliar</h5>
          <p className="card-text">
            casa 3 habitaciones 2 baños un patio esta como para montar un
            negocio
          </p>
        </div>
      </div>
      <div className="card">
        <img src="./img/zz.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casa Unifamiliar</h5>
          <p className="card-text">
            casa Unifamiliar 4 habitaciones 3 baños un patio garaje
          </p>
        </div>
      </div>
      <div className="card">
        <img src="./img/mm.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casas 1 piso y 2</h5>
          <p className="card-text">
            casas ambas 2 habitaciones 1 baños un patio estan recien terminadas
          </p>
        </div>
      </div>
      <div className="Footer">
        <footer className="container">
          <footer className="container">
            <p className="float-right"></p>
            <p>
              ©2020 C.D.A C13 · <a href="/">Prom 2020 Desarrollo De Software</a>{" "}
              · <a href="/">I.E La Independencia</a>
            </p>
          </footer>
        </footer>
      </div>
      )
    </div>
  
  );
};
