# Módulo 2 · Feature 1 — Montando la estructura

**Sprint 7 · Node.js + Express · API REST básica**

---

## Objetivo

Construir el primer backend con Node.js + Express, aprendiendo:

- Qué es un servidor y cómo escucha peticiones.
- Qué es una API y cómo se diseñan rutas y endpoints.
- Cómo responder siempre en JSON con un formato estándar.

---

## Stack

| Tecnología | Versión |
|------------|---------|
| Node.js    | 20+ (LTS) |
| Express    | 5.x     |
| ES Modules | `"type": "module"` en `package.json` |

---

## Estructura del proyecto

```
src/
├── db/
│   └── products.js          # Datos de ejemplo (mock data)
├── helpers/
│   ├── response.js          # Helpers ok() y fail() para respuestas estándar
│   └── products.js          # Helpers de lógica de productos (getProductById)
├── routes/
│   ├── index.routes.js      # Punto de entrada de rutas + 404/500 global
│   ├── health.routes.js     # Ruta de diagnóstico del servidor
│   └── products.routes.js   # Rutas específicas de productos
├── app.js                   # Configuración de Express (middlewares + rutas)
└── server.js                # Arranque del servidor (listen)
```

**Separación de responsabilidades:**

- `server.js` solo enciende el servidor (`app.listen`).
- `app.js` configura middlewares y conecta las rutas.
- Las rutas viven en `routes/` y se montan desde `index.routes.js`.

---

## Arrancar el proyecto

```bash
npm install
npm start
```

El servidor arranca en `http://localhost:3005` con recarga automática (`--watch`).

> **Nota:** El enunciado indica el puerto `3000`, pero en este equipo ese puerto está ocupado por otro servicio. Se usa `3005` como alternativa directa; el comportamiento es idéntico.

---

## Endpoints

| Método | Ruta                  | Descripción                        |
|--------|-----------------------|------------------------------------|
| GET    | `/health`             | Estado del servidor                |
| GET    | `/api/products`       | Listar todos los productos         |
| GET    | `/api/products/:id`   | Obtener un producto por ID         |
| —      | cualquier otra ruta   | 404 en formato JSON estándar       |

---

## Formato de respuesta estándar

Todas las respuestas siguen el mismo contrato JSON:

**Éxito**
```json
{ "ok": true, "data": { ... } }
```

**Error**
```json
{ "ok": false, "error": { "message": "..." } }
```

---

## Ejemplos cURL

**Health check**
```bash
curl http://localhost:3005/health
```

**Listar productos**
```bash
curl http://localhost:3005/api/products
```

**Obtener producto por ID**
```bash
curl http://localhost:3005/api/products/1
```

**Producto no encontrado (404)**
```bash
curl http://localhost:3005/api/products/999
```

**Ruta inexistente (404)**
```bash
curl http://localhost:3005/ruta-que-no-existe
```

---

## Checks de autoevaluación

- [ ] `npm start` levanta el servidor sin errores
- [ ] `GET /health` → `{ ok: true, data: { status: "up", ... } }`
- [ ] `GET /api/products` → `{ ok: true, data: [ ... ] }`
- [ ] `GET /api/products/1` → `{ ok: true, data: { ... } }`
- [ ] `GET /api/products/999` → 404 con `{ ok: false, error: { message: "..." } }`
- [ ] Ruta inexistente → 404 en JSON estándar

---

## Uso de IA

Durante el sprint usé la IA para:

- **Datos de prueba (`src/db/products.js`)**: solicité a la IA que generase un array de 15 productos con campos `id`, `name`, `category`, `price` y `stock`. Revisé que los tipos fueran coherentes (precios como `number`, IDs correlativos) y que los datos tuvieran sentido como catálogo de productos tech antes de incorporarlos.
- **Readme (`README.md`)**: solicité a la IA que generase el README.md incluyendo los elementos necesarios.

Regla aplicada: nada de copiar código sin entenderlo. Cada sugerencia fue leída, ajustada y probada antes de quedar en el proyecto.
