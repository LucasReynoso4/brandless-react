# Brandless

Proyecto de e-commerce de indumentaria desarrollado con React 19 y Vite, en el marco de la Tecnicatura Universitaria en Programación (UTN-FRA).

## Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- Context API
- JavaScript

## Instalación y ejecución

```bash
git clone https://github.com/LucasReynoso4/brandless-react.git
cd brandless-react
npm install
npm run dev
```

## Rutas

- `/` — catálogo con todos los productos.
- `/category/:categoryId` — catálogo filtrado por categoría (remeras, pantalones, camperas, accesorios).
- `/item/:id` — detalle de un producto.
- `/cart` — carrito de compras.
- `*` — página 404 para rutas inexistentes.

## Componentes

- **Navbar**: logo, links de categorías (`NavLink`) y `CartWidget`.
- **CartWidget**: ícono de carrito con la cantidad total de items, tomada del `CartContext`.
- **ItemListContainer**: obtiene los productos (filtrados por categoría si corresponde) y muestra un estado de carga mientras llegan.
- **ItemList**: recorre los productos y renderiza un `Item` por cada uno.
- **Item**: card resumida (imagen, nombre, precio), enlazada al detalle del producto.
- **ItemDetailContainer**: obtiene un producto por el id de la URL (`useParams`).
- **ItemDetail**: muestra la información completa del producto e incluye el `ItemCount`.
- **ItemCount**: selector de cantidad (limitado entre 0 y el stock) con botón para agregar al carrito.
- **Cart**: lista los productos del carrito con subtotal por item, total general, opción de eliminar cada producto y de vaciar el carrito.

## Carrito de compras (Context API)

El estado del carrito vive en `src/context/CartContext.jsx`, en un `CartProvider` que envuelve toda la aplicación. Expone:

- `cart`: array de productos agregados, cada uno con su `quantity`.
- `addItem(item, quantity)`: agrega un producto; si ya está en el carrito, suma la cantidad en vez de duplicarlo (actualización inmutable con `.map()`).
- `removeItem(id)`: quita un producto del carrito (`.filter()`).
- `clear()`: vacía el carrito.
- `isInCart(id)`: indica si un producto ya está agregado.
- `totalItems`: cantidad total de unidades en el carrito.

Cualquier componente accede a este estado con el hook `useCart()`, sin necesidad de pasar props entre rutas.

## Simulación de datos asíncronos

El proyecto todavía no está conectado a una base de datos real; se simula el comportamiento de una API con dos funciones:

- **`src/mock/asyncMock.js`**: exporta `getProducts()`, que devuelve una `Promise` resuelta a los 2 segundos con el array completo de productos.
- **`src/services/getProductById.js`**: exporta `getProductById(id)`, que devuelve una `Promise` resuelta a los 500ms con el producto que coincide con ese id (o rechazada si no existe).

Este patrón (promesa + `useEffect` + `useState`) es el mismo que se usará más adelante para conectar la app a Firebase.