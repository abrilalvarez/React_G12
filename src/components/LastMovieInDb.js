import React from 'react';
import imagenFondo from '../assets/images/curso1677069282963.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo curso impartido </h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Elaboración de Tableros de Seguimiento "Dashboards" y Control del Proyecto con POWER BI
                    Los Dashboards y tableros de control te permitirán visualizar los indicadores claves que están conectados con el mapa estratégico del proyecto y tomar decisiones acertadas a tiempo para ordenar y controlar la gestión del proyecto. </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalles del curso</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
