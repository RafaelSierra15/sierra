<?php if (isset($_GET['mensaje'])): ?>
    <div class="mensaje <?php echo htmlspecialchars($_GET['tipo']); ?>">
        <?php echo htmlspecialchars($_GET['mensaje']); ?>
    </div>
<?php endif; ?>


<!-- filepath: c:\xampp\htdocs\plataforma-cursos\index.php -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Inscripción</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .mensaje {
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 5px;
        }
        .exito {
            background-color: #d4edda;
            color: #155724;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
        }
    </style>
</head>
<body>
    <h1>Formulario de Inscripción</h1>

    <!-- Mostrar mensajes si existen -->
    <?php if (isset($_GET['mensaje']) && isset($_GET['tipo'])): ?>
        <div class="mensaje <?php echo htmlspecialchars($_GET['tipo']); ?>">
            <?php echo htmlspecialchars($_GET['mensaje']); ?>
        </div>
    <?php endif; ?>

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