<!-- filepath: c:\xampp\htdocs\plataforma-cursos\formulario_inscripcion.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Inscripción</title>
</head>
<body>
    <h1>Formulario de Inscripción</h1>

    <?php
    // Mostrar un mensaje dinámico si existe
    if (isset($_GET['mensaje'])) {
        echo "<p>" . htmlspecialchars($_GET['mensaje']) . "</p>";
    }
    ?>

    <form action="inscripcion.php" method="post">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="email">Correo Electrónico:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="curso">Curso:</label><br>
        <input type="text" id="curso" name="curso" required><br><br>

        <button type="submit">Inscribirse</button>
    </form>
</body>
</html>