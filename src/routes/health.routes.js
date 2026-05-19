import { Router } from "express";
import { ok, fail } from "../helpers/response.js";

const router = Router();

router.get('/', (req, res) => {
    ok(res, {
        status: 'up',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
});

export default router;