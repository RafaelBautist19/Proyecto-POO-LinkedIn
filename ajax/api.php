<?php
    include ("../class/class-conexion.php");
    include ("../class/class-usuarios.php");

    $conexion = new Conexion();

    switch ($_GET["accion"]){
        case "insertar-usuario":
        $u = new Usuario(null,$_POST['genero'],$_POST['nombre'],$_POST['apellido'],$_POST['correo'],$_POST['contrasenia'],null,null,null,null,null,null);
        echo $u->insertarUsuario($conexion);
        break;
    }
?>