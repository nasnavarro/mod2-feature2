import { Router } from "express";
import productsRoutes from "./products.routes.js";
import healthRoutes from "./health.routes.js";
import { ok, fail } from "../helpers/response.js";

const router = Router();

//Ruta raíz
router.get('/', (req, res) => ok(res, "Página index sin contenido"));
// Rutas de productos.
router.use("/api/products", productsRoutes);
// Ruta health para autodiagnóstico.
router.use("/health", healthRoutes);

// 404 - ruta no existe
router.use((req, res) => fail(res, `La ruta ${req.url} no existe`, 404));

// 500 - error no controlado
router.use((err, req, res, next) => {
    console.error(err);
    fail(res, 'Error interno del servidor', 500);
});

export default router;