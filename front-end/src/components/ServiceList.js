import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ServiceList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get('/services')
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar serviços:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Serviços</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceList;
