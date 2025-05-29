# 📊 Usuarios Aleatorios - Proyecto Web con HTML, CSS y JavaScript


Este proyecto es una aplicación web básica que consume la API pública [RandomUser](https://randomuser.me) para mostrar una tabla con información de 10 usuarios generados aleatoriamente. Fue desarrollado usando únicamente tecnologías web estándar (HTML5, CSS3 y JavaScript Vanilla), sin frameworks.


---


## ✨ Características


- 🔄 Consumo dinámico de datos desde `https://randomuser.me/api/?results=10&inc=gender,name,location,email,dob,picture`
- 📋 Presentación de los datos en una tabla elegante y responsive
- 📷 Muestra los campos:
 - Fotografía
 - Nombre
 - Género
 - Ubicación (ciudad y país)
 - Correo electrónico
 - Fecha de nacimiento
- ⚠️ Manejo de errores y mensajes informativos (ej. usuarios no encontrados o fallos de conexión)
- 🎨 Diseño visual similar a Bootstrap, pero realizado solo con CSS puro


---


## 💻 Tecnologías utilizadas


- **HTML5** – estructura semántica
- **CSS3** – diseño y responsividad
- **JavaScript (Vanilla)** – consumo de API y manipulación del DOM


---


## 📸 Captura de pantalla


![Captura del proyecto](![data](image.png))


---


## 🚀 Cómo ejecutar este proyecto


1. **Clonar el repositorio**


  ```bash
  git clone https://github.com/natachang/NTT-test
  cd NTT-test


2. **Abrir el archivo en un navegador**


  Puedes abrir index.html directamente en tu navegador:
  ```bash
  open index.html
  ```
  o haciendo doble clic sobre el archivo.


---


##  📁 Estructura del proyecto


📦 NTT-test/


├── index.html         # Página principal con la estructura


├── style.css          # Estilos visuales del proyecto


├── script.js          # Lógica JavaScript (API, render, errores)


├── logo.png           # Logo mostrado en el encabezado


└── screenshot.png     # Imagen opcional de vista previa


---


## 📬 Mensajes de estado


El sistema informa al usuario en pantalla cuando:


- ❌ Ocurre un error de red o carga
- ℹ️ No se encuentran usuarios disponibles


Los mensajes aparecen debajo de la tabla, con estilos diferenciados según el tipo de alerta.


---


## 🙋 Autor


Desarrollado por **[Natalie Chang]** 
📫 [https://github.com/natachang]


🌐 Este proyecto fue un reto para la empresa NTT Data.


> ¡Gracias por visitar este repositorio! Si te resulta útil, considera darle una ⭐ en GitHub.s





