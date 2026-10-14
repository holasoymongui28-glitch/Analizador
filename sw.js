/* Password Securex 8.0 — same-origin static assets only. Never caches ads, passwords or verification requests. */
const SCOPE=new URL(self.registration.scope);const CACHE='password-securex-shell-v8-publicable-'+encodeURIComponent(SCOPE.pathname);
const PATHS=["", "guias/", "guias/crear-contrasena-segura/", "guias/frases-contrasena/", "guias/cuanto-tardan-descifrar-contrasena/", "guias/gestor-contrasenas-y-doble-factor/", "metodologia/", "index.html", "manifest.webmanifest", "assets/lectura-v8.css", "assets/home-seo-v8.css", "assets/file-links-v8.js", "icons/securex-logo.webp", "icons/securex-192.png", "icons/securex-512.png"];
const ALLOWED=new Set(PATHS.map(p=>new URL(p,SCOPE).href));
function canonicalRequest(request){const u=new URL(request.url);u.hash='';u.search='';if(u.pathname===SCOPE.pathname+'index.html')u.pathname=SCOPE.pathname;return u.href;}
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(CACHE);await Promise.all(PATHS.map(async path=>{try{const url=new URL(path,SCOPE).href;const r=await fetch(url,{cache:'reload'});if(r.ok)await c.put(url,r);}catch(_){}}));await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const n of await caches.keys())if(n!==CACHE&&n.startsWith('password-securex-shell-'))await caches.delete(n);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==SCOPE.origin)return;const key=canonicalRequest(req);if(!ALLOWED.has(key))return;
 event.respondWith((async()=>{const c=await caches.open(CACHE);try{const response=await fetch(req);if(response.ok)await c.put(key,response.clone());return response;}catch(_){return (await c.match(key))||Response.error();}})());
});
