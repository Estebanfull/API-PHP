import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Home';
import IngresoApp from './components/IngresoApp';
import MenuFuncionarios from './components/MenuFuncionarios';
import IngresoFuncionarios from './components/IngresoFuncionarios';
import CrearUsuario from './components/CrearUsuario';
import ModificarUsuario from './components/ModificarUsuario';
import EliminarUsuario from './components/EliminarUsuario';
import MenuUsuarios from './components/MenuUsuarios'; // Importa el componente MenuUsuarios

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ingreso" element={<IngresoApp />} />
        <Route path="/ingreso-usuarios" element={<IngresoApp />} />
        <Route path="/ingreso-funcionarios" element={<IngresoFuncionarios />} />
        <Route path="/menu-funcionarios" element={<MenuFuncionarios />} />
        <Route path="/crear-usuario" element={<CrearUsuario />} />
        <Route path="/usuarios-modificar" element={<ModificarUsuario />} />
        <Route path="/usuarios-eliminar" element={<EliminarUsuario />} />
        <Route path="/menu-usuarios" element={<MenuUsuarios />} /> {/* Agrega este Route para el componente MenuUsuarios */}
      </Routes>
    </Router>
  );
}

export default App;
