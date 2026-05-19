//Construcción de una respuesta ok con formato {ok,data}
export const ok = (res, data) => res.json({ ok: true, data });

//Construcción de una respuesta false con formato{ok:false,error}
export const fail = (res, message, status = 400) =>
  res.status(status).json({ ok: false, error: { message } });
