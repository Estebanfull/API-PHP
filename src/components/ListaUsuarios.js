import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET para obtener todos los usuarios cuando el componente se monte
    axios.get('/api/usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []); // El segundo argumento de useEffect, [], asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id_usuario}>
            {usuario.nombre} - {usuario.correo_electronico}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
