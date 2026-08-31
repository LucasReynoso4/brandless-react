# Brandless

Proyecto de e-commerce desarrollado con React 19 y Vite). Brandless es una tienda online de productos sin marca: la idea es ofrecer artículos de buena calidad a precio justo, sin pagar de más por el packaging o el logo.

Esta es la entrega de la estructura base del proyecto: en próximas entregas se incorporarán productos, rutas, carrito de compras, checkout y conexión con Firebase.

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript

## Instalación y ejecución

1. Clonar el repositorio
```bash
   git clone https://github.com/LucasReynoso4/brandless-react.git
   cd brandless-react
```
2. Instalar las dependencias
```bash
   npm install
```
3. Ejecutar el proyecto en modo desarrollo
```bash
   npm run dev
```

## Estructura del proyecto

```
src/
  components/
    Navbar.jsx
    Navbar.css
    CartWidget.jsx
    ItemListContainer.jsx
    ItemList.jsx
    Item.jsx
  mock/
    asyncMock.js
  App.jsx
  main.jsx