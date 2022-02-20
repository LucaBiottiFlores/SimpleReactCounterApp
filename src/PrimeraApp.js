// Functional Components
// import React, { Fragment } from "react";
import React from 'react';
import PropTypes from 'prop-types';

// poner <> </> es lo mismo que un fragment, que se usa para no llenar de divs

const PrimeraApp = ({ saludo, subtitulo }) => {

   

    // booleanos y objetos no se imprimen en la interpolación, números, strings, arreglos
    // const saludo = 'Hola mundo const'
    // para imprimir objetos usar JSON.stringify en una etiqueta <pre></pre>
  return (
      <>
        <h1> { saludo } </h1>
        {/* <pre>{ JSON.stringify(Saludo, null, 3) }</pre> */}
        <p>{ subtitulo }</p>
      </>
  )
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string 
} 

PrimeraApp.defaultProps = {
    saludo: 'hola soy Goku',
    subtitulo: 'soy un subtitulo'
}

export default PrimeraApp;
