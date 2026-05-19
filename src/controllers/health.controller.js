import { ok } from '../helpers/controllers.response.js';

// Función que devuelve un informe de estado del servidor.
export const getHealth = (req, res) => {
  ok(res, {
    status: 'up',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
};
