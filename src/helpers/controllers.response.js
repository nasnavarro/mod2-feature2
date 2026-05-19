// Respuesta exitosa. Usar para cualquier operación que devuelva datos: GET, POST (201 lo gestiona aparte), PUT, DELETE.
export const ok = (res, data) => res.json({ ok: true, data });

// Error genérico parametrizable. Base del resto de helpers de error.
export const fail = (res, message, status = 400) =>
  res.status(status).json({ ok: false, error: { message } });

// Datos de entrada inválidos o incompletos. Usar cuando el body o los params no superan la validación
// (campo obligatorio ausente, tipo incorrecto, valor fuera de rango).
// details: array opcional con los errores concretos por campo. Permite reportar todos los fallos en una sola respuesta.
export const badRequest = (res, message = 'Datos inválidos', details = []) => {
  const error = { message };
  if (details.length) error.details = details;
  return res.status(400).json({ ok: false, error });
};

// Recurso no encontrado. Usar exclusivamente cuando se busca algo por identificador concreto (id) y no existe.
// No usar para filtros o listados sin resultados — esos devuelven ok con array vacío.
export const notFound = (res, message = 'Recurso no encontrado') => fail(res, message, 404);

// Error inesperado del servidor. Usar en bloques catch cuando el error no es de validación ni de negocio
// sino una excepción no controlada.
export const serverError = (res, message = 'Error interno del servidor') => fail(res, message, 500);
