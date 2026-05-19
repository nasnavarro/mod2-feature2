import { Router } from "express";
import products from "../db/products.js";
import { ok, fail } from "../helpers/response.js";
import { getProductById } from "../helpers/products.js";

const router = Router();

//Gestión de la ruta de productos
router.get('/', (req, res) => {
    if(!products) return fail(res, "No existe el recurso de productos");
    ok(res, products);
});

//Gestión de la ruta de un producto a partir de su id
router.get('/:id', (req, res) => {
    const id_producto = Number(req.params.id);

    if(!id_producto) return fail(res, `El formato pasado de id de producto (${req.params.id}) no es válido`);

    const product = getProductById(req.params.id);
    if (!product) return fail(res, 'Producto no encontrado', 404);
    ok(res, product);
});

export default router;