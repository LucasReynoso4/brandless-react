# Brandless

E-commerce de indumentaria hecho con React, Vite y Firebase. Proyecto final del curso de React de Coderhouse (UTN-FRA).

Demo: https://brandless-react.vercel.app/

## Tecnologías

- React 19
- Vite
- React Router DOM
- Context API
- Firebase (Firestore + Authentication)
- Vercel

## Cómo correrlo local

```bash
git clone https://github.com/LucasReynoso4/brandless-react.git
cd brandless-react
npm install
```

Necesitás un archivo `.env` en la raíz con tus propias credenciales de Firebase (los nombres de las variables están en `.env.example`). Después:

```bash
npm run dev
```

Variables necesarias:

VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID


## Rutas

- `/` catálogo completo
- `/category/:categoryId` catálogo filtrado por categoría
- `/item/:id` detalle de producto
- `/cart` carrito
- `/login` y `/register` autenticación
- `/checkout` requiere estar logueado
- cualquier otra ruta muestra un 404

## Qué tiene

Los productos se traen de Firestore (con filtro por categoría desde el servidor). El carrito vive en un Context y se mantiene mientras navegás o te logueás. El registro/login usa Firebase Auth y la sesión persiste al recargar. El checkout solo se muestra si hay un usuario logueado; si no, te manda a login. Al confirmar la compra se genera una orden en Firestore y se muestra el ID como confirmación, y recién ahí se vacía el carrito. Hay loaders mientras carga todo y mensajes de error si algo falla.

## Estructura de un producto (Firestore, colección `products`)

```json
{
  "name": "Remera Oversize",
  "description": "Remera oversize de algodón 100%, corte relajado.",
  "price": 15000,
  "img": "https://picsum.photos/seed/remera1/400/400",
  "category": "Remeras",
  "stock": 20
}
```

## Estructura de una orden (colección `orders`)

```json
{
  "userId": "uid-del-usuario",
  "userEmail": "usuario@mail.com",
  "buyer": {
    "nombre": "Lucas",
    "apellido": "Reynoso",
    "telefono": "1122334455",
    "direccion": "Calle Falsa 123",
    "ciudad": "Almirante Brown"
  },
  "items": [
    { "id": "idProducto", "name": "Remera Oversize", "price": 15000, "quantity": 2 }
  ],
  "total": 30000,
  "createdAt": "serverTimestamp()"
}
```

## Seguridad

Las reglas de Firestore están en `firestore.rules`. Cualquiera puede leer los productos pero nadie puede escribirlos desde el cliente. Las órdenes solo se pueden crear si hay un usuario logueado, y no se pueden leer, editar ni borrar desde afuera.