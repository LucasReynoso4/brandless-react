# Brandless

Proyecto de e-commerce de indumentaria desarrollado con React 19, Vite y Firebase, en el marco de la Tecnicatura Universitaria en Programación (UTN-FRA).

## Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- Context API
- Firebase (Firestore + Authentication)

## Instalación y ejecución

```bash
git clone https://github.com/LucasReynoso4/brandless-react.git
cd brandless-react
npm install
```

Creá un archivo `.env` en la raíz (mirá `.env.example` para los nombres de las variables) con tus propias credenciales de Firebase, y después:

```bash
npm run dev
```

## Variables de entorno

VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID


## Colecciones de Firestore

**`products`** — catálogo de productos.
```json
{
  "name": "Remera Oversize",
  "description": "Remera oversize de algodón 100%, corte relajado.",
  "price": 15000,
  "img": "https://placehold.co/300x300?text=Remera+Oversize",
  "category": "Remeras",
  "stock": 20
}
```

**`orders`** — órdenes de compra generadas en el checkout.
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

## Componentes principales

- **Navbar**: categorías, `CartWidget`, y muestra el email del usuario logueado (o link a "Ingresar").
- **ItemListContainer / ItemDetailContainer**: obtienen productos desde Firestore (`getProducts`, `getProductById`), con estados de carga y error.
- **CartContext**: estado global del carrito.
- **AuthContext**: estado global de autenticación (registro, login, logout, `onAuthStateChanged`).
- **Login / Register**: formularios de autenticación con manejo de errores.
- **ProtectedRoute**: redirige a `/login` si el usuario no está autenticado.
- **Checkout**: formulario de datos de entrega, valida campos obligatorios, genera la orden en Firestore (`addDoc` + `serverTimestamp`), muestra el ID de confirmación y vacía el carrito.

## Seguridad

Las reglas de Firestore permiten lectura pública de `products`, pero solo usuarios autenticados pueden crear documentos en `orders`. Nadie puede editar productos ni leer/modificar órdenes ajenas desde el cliente.