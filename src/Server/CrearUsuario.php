<?php
// Obtener los datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

// Obtener los datos del usuario
$nombre = $data['nombre'];
$telefono = $data['telefono'];
$correoElectronico = $data['correoElectronico'];
$direccion = $data['direccion'];
$tipoDeAsistencia = $data['tipoDeAsistencia'];
$clave = $data['clave'];


$mensajeExito = "Usuario creado con éxito:\nNombre: $nombre\nTeléfono: $telefono\nCorreo Electrónico: $correoElectronico\nDirección: $direccion\nTipo de Asistencia: $tipoDeAsistencia";
echo $mensajeExito;
?>
