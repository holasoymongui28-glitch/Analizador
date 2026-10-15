// Only retired guide URLs reach this handler. No requests, tracking or storage.
const HTML="<!doctype html><html lang=\"es\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"robots\" content=\"noindex, follow\"><title>Contenido retirado | Password Securex</title><style>body{background:#050505;color:#deede2;font:16px/1.8 system-ui;max-width:650px;padding:70px 25px;margin:auto}h1{line-height:1.2}a{color:#00ff66}small{color:#9bad9f}</style></head><body><small>PASSWORD_SECUREX / 410</small><h1>Este contenido se ha retirado.</h1><p>Esta página ya no forma parte de la web. Las herramientas siguen disponibles.</p><p><a href=\"/\">Abrir Password Securex →</a></p></body></html>";
export function onRequest({request}) {
  return new Response(request.method==='HEAD'?null:HTML,{status:410,headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'public, max-age=3600','X-Robots-Tag':'noindex, follow'}});
}
