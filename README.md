# 🏥 MediApp - Sistema de Reserva de Citas Médicas

## 📋 Nombre del Proyecto
**MediApp** - Plataforma digital para gestión de citas médicas

## 📝 Descripción
Aplicación web desarrollada con React que permite a pacientes y doctores gestionar citas médicas de manera eficiente. Incluye autenticación de usuarios, búsqueda de doctores, sistema de reseñas y gestión de perfil.

## 🛠 Tecnologías Utilizadas
- **React 18** - Biblioteca principal
- **React Router DOM 6** - Navegación entre páginas
- **Axios** - Para peticiones API (simulado)
- **CSS3** - Estilos y animaciones
- **Netlify** - Despliegue y hosting

## 📁 Estructura del Proyecto

```
capstone-project/
├── public/
│   ├── index.html          # Archivo principal con meta tags SEO
│   └── _redirects          # Configuración para React Router en Netlify
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Barra de navegación con logout
│   │   ├── SignUp.jsx           # Registro de usuarios (API)
│   │   ├── Login.jsx            # Autenticación de usuarios (API)
│   │   ├── FindDoctorSearch.jsx # Búsqueda de doctores
│   │   ├── AppointmentForm.jsx  # Formulario completo (nombre, teléfono, fecha, hora)
│   │   ├── AppointmentFormIC.jsx # Formulario simplificado (solo nombre y teléfono)
│   │   ├── GiveReviews.jsx      # Sistema de reseñas con desactivación post-envío
│   │   ├── ProfileCard.jsx      # Tarjeta de perfil con edición
│   │   ├── DoctorCard.jsx       # Lista de doctores con cancelación de citas
│   │   └── Notification.jsx     # Componente de notificaciones
│   ├── App.jsx             # Componente principal con integración de notificaciones
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── screenshots/            # Capturas de pantalla requeridas
│   ├── navbar_design.png
│   ├── signup_form_design.png
│   ├── login_form_design.png
│   └── launch.png
├── build-output.txt        # Salida del terminal de producción
├── register.txt            # Comando cURL para registro
├── login.txt               # Comando cURL para login
├── patient_report.pdf      # Informe médico de ejemplo
└── README.md               # Este archivo
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (v14 o superior)
- npm (v6 o superior)

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/caindra/capstone-project.git
cd capstone-project
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar la aplicación**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia la aplicación en modo desarrollo |
| `npm run build` | Crea la build de producción |
| `npm test` | Ejecuta los tests |

## 🌐 API Endpoints (Simulados)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/register` | Registro de nuevos usuarios |
| POST | `/api/login` | Autenticación de usuarios |
| GET | `/api/doctors` | Obtener lista de doctores |
| POST | `/api/appointments` | Crear nueva cita |
| DELETE | `/api/appointments/:id` | Cancelar cita |

### Ejemplo de uso con cURL

**Registro de usuario:**
```bash
curl -X POST https://ubiquitous-chaja-fa1e4a.netlify.app/register \
  -H "Content-Type: application/json" \
  -d '{
    "role": "paciente",
    "name": "María González",
    "email": "maria@test.com",
    "phone": "+34612345678",
    "password": "123456"
  }'
```

**Inicio de sesión:**
```bash
curl -X POST https://ubiquitous-chaja-fa1e4a.netlify.app/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "maria@test.com",
    "password": "123456"
  }'
```

## 📱 Funcionalidades Implementadas

### ✅ Autenticación
- Registro de usuarios con validación de contraseña
- Inicio de sesión con almacenamiento de token
- Cierre de sesión desde la barra de navegación

### ✅ Gestión de Citas
- Búsqueda de doctores por nombre o especialidad
- Formulario completo (nombre, teléfono, fecha, hora)
- Formulario simplificado para citas rápidas (solo nombre y teléfono)
- Cancelación de citas

### ✅ Reseñas
- Formulario para dejar reseñas (nombre, puntuación, comentario)
- Desactivación del formulario después del envío
- Visualización de reseñas existentes

### ✅ Perfil de Usuario
- Visualización de datos del perfil en formato tarjeta
- Edición de información personal (nombre, email, teléfono)
- Persistencia de cambios en localStorage

### ✅ Notificaciones
- Sistema de notificaciones integrado en toda la aplicación
- Mensajes de éxito y error con animación
- Desaparición automática después de 3 segundos

## 📸 Capturas de Pantalla

Todas las evidencias se encuentran en la carpeta `screenshots/`:

| Archivo | Descripción |
|---------|-------------|
| `navbar_design.png` | Barra de navegación con enlaces a Cita, Iniciar Sesión y Registrarse |
| `signup_form_design.png` | Formulario de registro (Rol, Nombre, Email, Teléfono, Contraseña) |
| `login_form_design.png` | Formulario de inicio de sesión (Email, Contraseña) |
| `launch.png` | Página de inicio desplegada con URL visible |

## 🌍 Despliegue

### URL del sitio desplegado
[https://ubiquitous-chaja-fa1e4a.netlify.app/](https://ubiquitous-chaja-fa1e4a.netlify.app/)

### Configuración para Netlify
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Archivo `_redirects`:** Configurado para manejar rutas de React Router

## 🔍 Verificación de Criterios

| Tarea | Descripción | Estado |
|-------|-------------|--------|
| 1 | Barra de navegación | ✅ |
| 2 | Formulario de registro | ✅ |
| 3 | Formulario de login | ✅ |
| 4 | README.md | ✅ |
| 5 | SignUp.jsx | ✅ |
| 6 | Login.jsx | ✅ |
| 7 | Navbar.jsx (cierre de sesión) | ✅ |
| 8 | FindDoctorSearch.jsx | ✅ |
| 9 | App.jsx (notificaciones) | ✅ |
| 10 | AppointmentFormIC.jsx | ✅ |
| 11 | GiveReviews.jsx | ✅ |
| 12 | ProfileCard.jsx | ✅ |
| 13 | build-output.txt | ✅ |
| 14 | index.html (meta tags SEO) | ✅ |
| 15 | launch.png | ✅ |
| 16 | register.txt | ✅ |
| 17 | login.txt | ✅ |
| 18 | AppointmentForm.jsx | ✅ |
| 19 | DoctorCard.jsx (cancelar citas) | ✅ |
| 20 | patient_report.pdf | ✅ |
| 21 | Carpeta screenshots | ✅ |

## 👥 Autores
- **Tu Nombre** - *Desarrollador Principal*

## 📄 Licencia
Este proyecto es parte de un curso educativo - Todos los derechos reservados.

## 📞 Contacto
Para cualquier consulta sobre el proyecto, abrir un issue en el repositorio de GitHub.

---
*Última actualización: Enero 2024*
```

---

## 📝 **Cómo crear el README.md desde la terminal**

### Opción 1: Usando `cat` (más rápido)

```bash
cat > README.md << 'EOF'
# 🏥 MediApp - Sistema de Reserva de Citas Médicas

## 📋 Nombre del Proyecto
**MediApp** - Plataforma digital para gestión de citas médicas

## 📝 Descripción
Aplicación web desarrollada con React que permite a pacientes y doctores gestionar citas médicas de manera eficiente. Incluye autenticación de usuarios, búsqueda de doctores, sistema de reseñas y gestión de perfil.

## 🛠 Tecnologías Utilizadas
- **React 18** - Biblioteca principal
- **React Router DOM 6** - Navegación entre páginas
- **Axios** - Para peticiones API (simulado)
- **CSS3** - Estilos y animaciones
- **Netlify** - Despliegue y hosting

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (v14 o superior)
- npm (v6 o superior)

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/caindra/capstone-project.git
cd capstone-project
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar la aplicación**
```bash
npm start
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📸 Capturas de Pantalla

Todas las evidencias se encuentran en la carpeta `screenshots/`:

| Archivo | Descripción |
|---------|-------------|
| `navbar_design.png` | Barra de navegación con enlaces a Cita, Iniciar Sesión y Registrarse |
| `signup_form_design.png` | Formulario de registro (Rol, Nombre, Email, Teléfono, Contraseña) |
| `login_form_design.png` | Formulario de inicio de sesión (Email, Contraseña) |
| `launch.png` | Página de inicio desplegada con URL visible |

## 🌍 Despliegue

### URL del sitio desplegado
[https://ubiquitous-chaja-fa1e4a.netlify.app/](https://ubiquitous-chaja-fa1e4a.netlify.app/)

## 👥 Autores
- **María Mira Galindo** - *Desarrollador Principal*

---
*Última actualización: Enero 2024*
EOF
```

### Opción 2: Usando `nano` (editor)

```bash
nano README.md
```

### Opción 3: Usando `vim`

```bash
vim README.md
```

---

## ✅ **Verificación después de crear el archivo**

```bash
# Verificar que se creó
ls -la README.md

# Ver el contenido
cat README.md | head -20

# Subir a GitHub
git add README.md
git commit -m "Agrega README.md completo"
git push
```
