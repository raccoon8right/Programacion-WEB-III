# La Cumbre — Sistema de Gestión de Ventas de Minerales

**Integrantes:**
- Adrian Marcos Alarcon Lopez
- Royer Marcos Patty Mamani
- Guillermo Miguel Flores Quisbert

---

## Objetivo del Proyecto

Aplicación web para la administración y venta de minerales y productos relacionados. Permite a los clientes explorar el catálogo, realizar pedidos y gestionar su carrito de compras. El panel de administración ofrece control total sobre productos, categorías, empresas y transportes, además de reportes en PDF, gráficos estadísticos y un sistema de autenticación con registro de actividad.

---

## Estructura del Proyecto

```
Proyecto/
├── backend/    # API REST (Node.js + Express + MySQL)
├── frontend/   # Aplicación React (Vite)
└── .gitignore
```

---

## Cumplimiento de Requisitos

| # | Requisito | Ubicación en el proyecto |
|---|-----------|--------------------------|
| 1 | **Objetivo definido** | Aplicación para venta de minerales. Descripción completa en este README. |
| 2 | **Menú** | `frontend/src/components/Navbar.jsx` – Navegación principal con enlaces a todas las secciones. |
| 3 | **CRUD con eliminación lógica** | Ejemplo en Productos: `controllers/producto.controller.js` (campo `activo`), `models/producto.model.js`, `pages/AdminProductos.jsx`. También presente en categorías, empresas, etc. |
| 4 | **Frontend en React** | Carpeta `frontend/` – React 19 con Vite. Componentes en `src/pages/` y `src/components/`. |
| 5 | **Backend en Node.js** | Carpeta `backend/` – Express, controladores, rutas y middlewares. Conexión a MySQL mediante `mysql2`. |
| 6 | **Validaciones en campos de entrada** | Backend: `middlewares/*.validator.js` (usando `express-validator`). Frontend: validaciones en formularios de Login, Register, AdminProductos, etc. |
| 7 | **Reporte en PDF** | `frontend/src/utils/generarReporte.js` – Genera listados y resúmenes usando `jspdf` y `jspdf-autotable`. |
| 8 | **Gráfico estadístico** | `frontend/src/pages/AdminDashboard.jsx` – Gráficos con `recharts` (ventas por mes, productos más vendidos, etc.). |
| 9 | **Autenticación y CAPTCHA** | Login: `Login.jsx` y `auth.controller.js`. CAPTCHA: Google reCAPTCHA — el componente `<ReCAPTCHA />` envía un token que el middleware `captcha.middleware.js` verifica contra la API de Google. Rutas protegidas con `PrivateRoute.jsx` y `auth.middleware.js`. |
| 10 | **Registro con validación de contraseña y encriptación** | `Register.jsx`. Indicador de fortaleza en `utils/passwordStrength.js` (clasifica: débil / intermedio / fuerte). Contraseña encriptada con `bcryptjs` antes de almacenarse. |
| 11 | **Log de acceso** | `models/logAcceso.model.js`. El middleware `auth.middleware.js` registra automáticamente cada ingreso y cierre de sesión (usuario, IP, navegador y fecha/hora). |
| 12 | **GitHub del grupo** | Repositorio enviado por Telegram junto con la nómina de integrantes. |

---

## Instalación y Ejecución

### Requisitos previos

- Node.js v18 o superior
- MySQL (local o en la nube)
- Cuenta en [Cloudinary](https://cloudinary.com) para gestión de imágenes
- Claves de [Google reCAPTCHA](https://www.google.com/recaptcha) (clave de sitio y clave secreta)

### Backend

```bash
cd backend
cp .env.example .env   # Completar las variables de entorno (ver sección siguiente)
npm install
npm run dev            # Modo desarrollo con nodemon
# o
npm start              # Modo producción
```

### Frontend

```bash
cd frontend
cp .env.example .env   # Configurar VITE_API_URL y VITE_RECAPTCHA_SITE_KEY
npm install
npm run dev
```

---

## Variables de Entorno

### Backend (`backend/.env`)

```env
# Servidor
PORT=3000
NODE_ENV=development

# Base de datos MySQL
DB_HOST=localhost
DB_PORT=3306
DB_NAME=la_cumbre
DB_USER=root
DB_PASSWORD=tu_password

# Autenticación
JWT_SECRET=clave_secreta_jwt
JWT_EXPIRES_IN=7d

# Google reCAPTCHA
RECAPTCHA_SECRET=clave_secreta_de_google

# Cloudinary
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

### Frontend (`frontend/.env`)

```env
# URL de la API
VITE_API_URL=http://localhost:3000/api

# Google reCAPTCHA
VITE_RECAPTCHA_SITE_KEY=tu_clave_de_sitio
```

---

## Tecnologías Utilizadas

| Capa | Tecnologías |
|------|-------------|
| **Frontend** | React 19, React Router 7, Context API, Axios, jsPDF + autotable, Recharts, react-google-recaptcha |
| **Backend** | Node.js, Express 5, mysql2, Cloudinary, Multer, bcryptjs, jsonwebtoken, express-validator |
| **Base de datos** | MySQL |
| **Herramientas** | Vite, nodemon, dotenv, cors |

---

## Notas de Seguridad

- Las contraseñas se almacenan con **bcrypt** (hash + salt), nunca en texto plano.
- Las sesiones se gestionan mediante **tokens JWT**.
- Cada ingreso y cierre de sesión queda registrado en `logAcceso` con IP, navegador y timestamp.
- Se implementa **Google reCAPTCHA** en el login y el registro para prevenir el acceso automatizado.

---

*Proyecto desarrollado como trabajo final de **Programación Web III***.
