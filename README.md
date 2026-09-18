# Brandless

Proyecto de e-commerce de indumentaria desarrollado con React 19 y Vite, en el marco de la Tecnicatura Universitaria en Programación (UTN-FRA).

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript

## Instalación y ejecución

```bash
git clone https://github.com/LucasReynoso4/brandless-react.git
cd brandless-react
npm install
npm run dev
```

## Componentes

- **Navbar**: logo y categorías de productos. Incluye el `CartWidget`.
- **CartWidget**: ícono de carrito con cantidad de productos.
- **ItemListContainer**: obtiene el listado de productos y muestra un estado de carga mientras llegan.
- **ItemList**: recorre los productos y renderiza un `Item` por cada uno.
- **Item**: card resumida (imagen, nombre, categoría y precio).
- **ItemDetailContainer**: obtiene un producto puntual por su id.
- **ItemDetail**: muestra la información completa del producto (imagen, nombre, precio, categoría, descripción y stock) e incluye el `ItemCount`.
- **ItemCount**: contador de cantidad, limitado entre 0 y el stock del producto.

## Simulación de datos asíncronos

El proyecto todavía no está conectado a una base de datos real; se simula el comportamiento de una API con dos funciones:

- **`src/mock/asyncMock.js`**: exporta `getProducts()`, que devuelve una `Promise` resuelta a los 2 segundos con el array completo de productos. `ItemListContainer` la llama dentro de un `useEffect` (con array de dependencias vacío, para que se ejecute una sola vez al montar), guarda el resultado con `useState` y muestra "Cargando productos..." hasta que la promesa se resuelve.
- **`src/services/getProductById.js`**: exporta `getProductById(id)`, que devuelve una `Promise` resuelta a los 500ms con el producto que coincide con ese id (o rechazada si no existe). `ItemDetailContainer` la consume en un `useEffect`, guarda el producto en estado y muestra "Cargando..." mientras espera la respuesta.

Este patrón (promesa + `useEffect` + `useState`) es el mismo que se usará más adelante para conectar la app a Firebase.