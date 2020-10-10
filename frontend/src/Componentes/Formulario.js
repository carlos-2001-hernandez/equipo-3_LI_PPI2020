import React from "react";

export const Formulario = () => {
  return (
    <div className="Formulario form-group container py-5">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Correo electronico</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Dirección de la vivienda</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Barrio</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Número de habitaciones</label>
            <select id="inputState" className="form-control">
              <option selected>1</option>
              <option selected>2</option>
              <option selected>3</option>
              <option selected>4</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Garaje</label>
            <select id="inputState" className="form-control">
              <option selected>Si</option>
              <option selected>No</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Número de baños</label>
            <select id="inputState" className="form-control">
              <option selected>1</option>
              <option selected>2</option>
              <option selected>3</option>
              <option selected>4</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Patio</label>
            <select id="inputState" className="form-control">
              <option selected>Si</option>
              <option selected>No</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Sala</label>
            <select id="inputState" className="form-control">
              <option selected>Si</option>
              <option selected>No</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Estado</label>
            <select id="inputState" className="form-control">
              <option selected>obra negra</option>
              <option selected>obra blanca</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Contrato</label>
            <select id="inputState" className="form-control">
              <option selected>Si</option>
              <option selected>No</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check"></div>
        </div>
        <div align="center">
          <button type="submit" className="btn btn-outline-danger">
            Siguiente
          </button>
          
        </div>
      </form>
    </div>
  );
};
