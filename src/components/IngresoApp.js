import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Css/IngresoApp.css'; // Importa el archivo CSS desde el directorio raíz del proyecto
import logo from '../Imagenes/logoike.svg'; // Importa el logo
import axios from 'axios'; // Importa Axios

function IngresoApp() {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await axios.post('/Server/login.php', { // Utiliza Axios para realizar la solicitud POST
        username,
        password
      });

      if (!response.data.success) {
        throw new Error(response.data.error);
      }

      navigate('/menu-funcionarios');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Error al iniciar sesión');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="contenedor">
      <img src={logo} alt="Logo de la aplicación" className="logo" />
      <div className="formulario">
        <div className="cuadro-azul"></div>
        <div className="cuadro-gris">
          <h2>Iniciar Sesión Usuarios</h2>
          <form onSubmit={handleFormSubmit}>
            <input type="text" name="usuario" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" required />
            <input type="password" name="contraseña" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
            <input type="submit" value="Ingresar" className="boton-ingresar" />
          </form>
          {error && <p className="error-message">{error}</p>}
          <a href="contrasena.html" className="boton-olvido">¿Olvidó o bloqueó su contraseña?</a>
        </div>
      </div>
      <footer className="pie-pagina">
        Hecho por <img src={logo} alt="Ike" /> Asistencia
      </footer>
    </div>
  );
}

export default IngresoApp;
