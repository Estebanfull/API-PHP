Iniciar con Create React App

Este proyecto fue creado con Create React App.

En el directorio del proyecto, puedes ejecutar:

npm start
Inicia la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

La página se recargará automáticamente cuando hagas cambios.
También podrás ver errores de lint en la consola.

Características Principales:

Ingreso de usuarios y funcionarios.
Creación, modificación y eliminación de usuarios.
Menús diferenciados para usuarios y funcionarios.


Estructura del Repositorio:

## Estructura de Enrutamiento

La aplicación utiliza React Router para gestionar las rutas. Aquí tienes un resumen de las rutas y los componentes asociados:

 -App.js

- **Ruta "/"**: Representa la página de inicio de la aplicación y muestra el componente `Inicio`.
- **Ruta "/ingreso"**: Dirige a la página de inicio de sesión y muestra el componente `IngresoApp`.
- **Ruta "/ingreso-usuarios"**: También dirige a la página de inicio de sesión y muestra el componente `IngresoApp`.
- **Ruta "/ingreso-funcionarios"**: Dirige a la página de inicio de sesión para los funcionarios y muestra el componente `IngresoFuncionarios`.
- **Ruta "/menu-funcionarios"**: Muestra el menú principal para los funcionarios y muestra el componente `MenuFuncionarios`.
- **Ruta "/crear-usuario"**: Permite crear un nuevo usuario y muestra el componente `CrearUsuario`.
- **Ruta "/usuarios-modificar"**: Permite modificar usuarios existentes y muestra el componente `ModificarUsuario`.
- **Ruta "/usuarios-eliminar"**: Permite eliminar usuarios y muestra el componente `EliminarUsuario`.
- **Ruta "/menu-usuarios"**: Muestra el menú principal para los usuarios y muestra el componente `MenuUsuarios`.

Para más detalles sobre cada componente, consulta los archivos correspondientes en la carpeta `src/components`.


La carpeta src contiene todo el código fuente de tu aplicación,

- src
  - components
    - CrearUsuario.js
    - EliminarUsuario.js
    - Home.js
    - IngresoApp.js
    - IngresoFuncionarios.js
    - ListaUsuarios.js
    - MenuFuncionarios.js
    - MenuUsuarios.js
    - ModificarUsuario.js


     
   los estilos en la carpeta css
  
  - css
    - EstilosSubMenu.css
    - Home.css
    - IngresoApp.css
    - MenuFuncionarios.css
    - MenuUsuarios.css

los scripts PHP en la carpeta Server

  - Server
    - login.php
    - CrearUsuario.php
    - conexion.php
    
Aunque esta creada la carpeta de coneccion para la BD no, se uso ya REST los realice unicamnete desde React y PhP

las imágenes en la carpeta Imagenes

  - Imagenes
    



