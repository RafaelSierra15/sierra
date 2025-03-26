<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim(htmlspecialchars($_POST["nombre"]));
    $email = trim(htmlspecialchars($_POST["email"]));
    $curso = trim(htmlspecialchars($_POST["curso"]));

    // Validar que los campos no estén vacíos
    if (!empty($nombre) && !empty($email) && !empty($curso)) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $mensaje = "Correo electrónico no válido.";
        } else {
            // Crear una línea de texto con los datos
            $linea = "Nombre: $nombre | Email: $email | Curso: $curso" . PHP_EOL;

            // Guardar los datos en un archivo de texto
            $archivo = "inscripciones.txt";
            if (file_put_contents($archivo, $linea, FILE_APPEND)) {
                $mensaje = "¡Inscripción guardada exitosamente!";
            } else {
                $mensaje = "Error al guardar la inscripción.";
            }
        }
    } else {
        $mensaje = "Por favor, completa todos los campos.";
    }

    // Redirigir de vuelta al formulario con mensaje
    header("Location: index.html?mensaje=" . urlencode($mensaje));
    exit();
}
?>