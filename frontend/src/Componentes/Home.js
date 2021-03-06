import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div>
      <h1>Geolocalizacion</h1>
      <p>Latitud: {state.latitude}</p>
      <p>longitud: {state.longitude}</p>

      <Link
        to={{
          pathname: "/map",
          
          state,
        }}
      >
        Mostrar ubicacion
      </Link>
    </div>
  );
};

export default Home;
