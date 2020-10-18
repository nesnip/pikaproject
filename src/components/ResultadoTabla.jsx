import React from 'react';
import '../css/Tabla.css';

const Tabla = () => {
    return(
      <div>
        <table class="table table-bordered demo">
        <thead>
          <tr>
            <th scope="col">Documento</th>
            <th scope="col">Fecha</th>
            <th scope="col">Unidades de Medida</th>
            <th scope="col">Caja y Bancos</th>
            <th scope="col">Total Activo</th>
            <th scope="col">Total Pasivo</th>
            <th scope="col">Total Patrimonio</th>
            <th scope="col">Ventas</th>
            <th scope="col">Costo de ventas</th>
            <th scope="col">Utilidad Bruta</th>
            <th scope="col">Utilidad Operacional</th>
            <th scope="col">Utilidad antes de impuestos</th>
            <th scope="col">Utilidad Neta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
            <td>{'text'}</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
};

export default Tabla;