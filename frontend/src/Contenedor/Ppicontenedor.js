import React from "react";

import { Body } from "../Componentes/Body";
import { Iniciar } from "../Componentes/Iniciar";
import { Formulario } from "../Componentes/Formulario";
import { Quienes } from "../Componentes/Quienes";
import { Propietario } from "../Componentes/Propietario";
import { Galeria } from "../Componentes/Galeria";
import { Principal} from "../Componentes/Principal";
import Citas from "../Componentes/Citas";
import { Perfil} from "../Componentes/Perfil";
import  Mapa from "../Componentes/Mapa";


import { BrowserRouter, Route } from "react-router-dom";


export default function Ppicontainer() {
  return (
<BrowserRouter>
      <Route path="/" exact component={Body} />
      <Route path="/Registrocliente" exact component={Iniciar} />
      <Route path="/Formulario" exact component={Formulario} />
      <Route path="/Quienes" exact component={Quienes} />
      <Route path="/Propietario" exact component={Propietario} />
      <Route path="/Galeria" exact component={Galeria} />
      <Route path="/Principal" exact component={Principal} />
      <Route path="/Citas" exact component={Citas} />
      <Route path="/Perfil" exact component={Perfil} />
      <Route path="/Mapa" exact component={Mapa} />
      
    </BrowserRouter>
    
    
  );
};
