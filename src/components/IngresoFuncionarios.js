import React, { useState } from 'react';
import '../Css/IngresoApp.css';
import logo from '../Imagenes/logoike.svg';

function IngresoFuncionarios () {
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);
  
      // Verifica que los campos de usuario y contraseña no estén vacíos
      const usuario = formData.get('usuario');
      const contraseña = formData.get('contraseña');
      if (!usuario || !contraseña) {
        setError('Por favor ingrese el usuario y la contraseña');
        return;
      }
  
      // Redirige a MenuUsuarios.js
      window.location.href = '/menu-funcionarios';
    };

  return (
    <div className="contenedor">
      <img src={logo} alt="Logo de la aplicación" className="logo" />
      <div className="formulario">
        <div className="cuadro-azul"></div>
        <div className="cuadro-gris">
          <h2>Iniciar Sesión Funcionarios</h2>
          
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

export default IngresoFuncionarios;
