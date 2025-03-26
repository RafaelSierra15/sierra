document.addEventListener("DOMContentLoaded", () => {
    const cursos = document.querySelectorAll(".course");

    cursos.forEach(curso => {
        curso.addEventListener("click", () => {
            const nombreCurso = curso.querySelector("h3").innerText;
            mostrarActividades(nombreCurso);
        });
    });

    function mostrarActividades(curso) {
        const actividades = {
            "Curso de HTML y CSS": ["Ver video de introducción", "Realizar cuestionario básico", "Construir una página simple"],
            "Curso de JavaScript": ["Ver conceptos básicos", "Hacer ejercicios con variables", "Crear una calculadora"],
            "Curso de Python": ["Aprender sintaxis básica", "Ejercicio de listas y diccionarios", "Escribir un pequeño programa"]
        };

        document.getElementById("curso-seleccionado").innerText = `Actividades del ${curso}:`;
        const lista = document.getElementById("lista-actividades");
        lista.innerHTML = "";
        
        actividades[curso].forEach(actividad => {
            const li = document.createElement("li");
            li.textContent = actividad;
            lista.appendChild(li);
        });

        document.getElementById("actividades").classList.remove("oculto");
    }
});

function mostrarSeccion(seccion) {
    document.querySelectorAll(".seccion").forEach(sec => sec.classList.add("oculto"));
    document.getElementById(seccion).classList.remove("oculto");
}


document.addEventListener("DOMContentLoaded", () => {
    // Lista de actividades por curso
    const actividadesPorCurso = {
        html: [
            "Introducción a HTML y CSS",
            "Estructura de una Página Web",
            "Uso de etiquetas semánticas",
            "Estilos básicos con CSS",
            "Proyecto final: Crear una página web"
        ],
        javascript: [
            "Sintaxis y Variables",
            "Condicionales y Bucles",
            "Funciones y Eventos",
            "Manipulación del DOM",
            "Proyecto final: Juego interactivo"
        ],
        python: [
            "Introducción a Python",
            "Estructuras de control",
            "Funciones y Módulos",
            "Manejo de archivos",
            "Proyecto final: Calculadora"
        ],
        react: [
            "Introducción a React",
            "Componentes y Props",
            "Estado y Eventos",
            "Rutas con React Router",
            "Proyecto final: Aplicación To-Do"
        ],
        node: [
            "Introducción a Node.js",
            "Manejo de paquetes con NPM",
            "Creación de servidores con Express",
            "Conexión a bases de datos",
            "Proyecto final: API RESTful"
        ],
        sql: [
            "Conceptos básicos de SQL",
            "Consultas SELECT",
            "Inserción y actualización de datos",
            "Claves primarias y foráneas",
            "Proyecto final: Base de datos de usuarios"
        ],
        java: [
            "Fundamentos de Java",
            "POO en Java",
            "Manejo de excepciones",
            "Colecciones en Java",
            "Proyecto final: Aplicación de escritorio"
        ],
        csharp: [
            "Sintaxis y estructura de C#",
            "POO con C#",
            "Manejo de bases de datos",
            "Interfaz gráfica con Windows Forms",
            "Proyecto final: Sistema de gestión"
        ],
        php: [
            "Fundamentos de PHP",
            "Conexión a bases de datos",
            "Autenticación de usuarios",
            "Uso de sesiones",
            "Proyecto final: Blog dinámico"
        ],
        ruby: [
            "Introducción a Ruby",
            "POO en Ruby",
            "Manejo de archivos",
            "Desarrollo web con Ruby on Rails",
            "Proyecto final: Aplicación web"
        ],
        go: [
            "Fundamentos de Go",
            "Manejo de goroutines",
            "Creación de APIs con Go",
            "Uso de bases de datos",
            "Proyecto final: Servicio web RESTful"
        ],
        typescript: [
            "Sintaxis de TypeScript",
            "Interfaces y Tipos",
            "POO con TypeScript",
            "Uso con React y Angular",
            "Proyecto final: Aplicación con TypeScript"
        ],
        swift: [
            "Fundamentos de Swift",
            "Diseño de interfaces con SwiftUI",
            "Manejo de bases de datos locales",
            "Consumo de APIs en iOS",
            "Proyecto final: Aplicación para iPhone"
        ]
    };

    // Función para mostrar las actividades de un curso
    function mostrarActividades(curso) {
        const tituloCurso = document.getElementById("curso-seleccionado");
        const listaActividades = document.getElementById("lista-actividades");
        const seccionActividades = document.getElementById("actividades");

        // Verificar si el curso tiene actividades
        if (actividadesPorCurso[curso]) {
            // Cambiar el título del curso seleccionado
            tituloCurso.textContent = `Actividades para el curso: ${curso.toUpperCase()}`;

            // Limpiar la lista de actividades
            listaActividades.innerHTML = "";

            // Agregar las actividades a la lista
            actividadesPorCurso[curso].forEach(actividad => {
                const li = document.createElement("li");
                li.textContent = actividad;
                listaActividades.appendChild(li);
            });

            // Mostrar la sección de actividades
            seccionActividades.classList.remove("oculto");
        } else {
            // Si no hay actividades definidas, mostrar un mensaje
            tituloCurso.textContent = `No hay actividades disponibles para el curso: ${curso.toUpperCase()}`;
            listaActividades.innerHTML = "";
            seccionActividades.classList.remove("oculto");
        }
    }

    // Agregar eventos a todos los cursos
    document.querySelectorAll(".course").forEach(course => {
        course.addEventListener("click", function () {
            const cursoSeleccionado = this.getAttribute("data-curso");
            mostrarActividades(cursoSeleccionado);
        });
    });
});
