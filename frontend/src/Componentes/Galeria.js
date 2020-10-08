import React from "react";

import { Link, whitRouter } from 'react-router-dom';


export const Galeria = () => {
  return (
    <div className="Galeria">
      <div class="container">
        <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">
          Fotografias de la vivienda
        </h1>

        <hr class="mt-2 mb-5" />

        <div class="row text-center text-lg-left">
          <div class="col-lg-3 col-md-4 col-6">
            <a href="/" class="d-block mb-4 h-100">
              <img
                class="img-fluid img-thumbnail"
                src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                alt=""
              />
              <a class="btn btn-outline-danger" href="/" role="button">
               Eliminar
              </a>
              <button class="btn btn-outline-danger" type="submit">
               Subir
              </button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <a href="/" class="d-block mb-4 h-100">
              <img
                class="img-fluid img-thumbnail"
                src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                alt=""
              />
              <a class="btn btn-outline-danger" href="/" role="button">
               Eliminar
              </a>
              <button class="btn btn-outline-danger" type="submit">
               Subir
              </button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <a href="/" class="d-block mb-4 h-100">
              <img
                class="img-fluid img-thumbnail"
                src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                alt=""
              />
              <a class="btn btn-outline-danger" href="/" role="button">
               Eliminar
              </a>
              <button class="btn btn-outline-danger" type="submit">
               Subir
              </button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <a href="/" class="d-block mb-4 h-100">
              <img
                class="img-fluid img-thumbnail"
                src="https://source.unsplash.com/M185_qYH8vg/400x300"
                alt=""
              />
              <a class="btn btn-outline-danger" href="/" role="button">
               Eliminar
              </a>
              <button class="btn btn-outline-danger" type="submit">
               Subir
              </button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <a href="/" class="d-block mb-4 h-100">
              <img
                class="img-fluid img-thumbnail"
                src="https://source.unsplash.com/sesveuG_rNo/400x300"
                alt=""
              />
              <a class="btn btn-outline-danger" href="/" role="button">
               Eliminar
              </a>
              <button class="btn btn-outline-danger" type="submit">
               Subir
              </button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-6">
            <a href="/" class="d-block mb-4 h-100">
              <img
                class="img-fluid img-thumbnail"
                src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                alt=""
              />
              <a class="btn btn-outline-danger" href="/" role="button">
               Eliminar
              </a>
              <button class="btn btn-outline-danger" type="submit">
               Subir
              </button>
            </a>
          </div>
        </div>
      </div>
      <div align="center"><Link className="btn btn-outline-danger" to="/Formulario" role="button">Siguiente</Link> </div>
     
      </div>
      
    
  );
};
