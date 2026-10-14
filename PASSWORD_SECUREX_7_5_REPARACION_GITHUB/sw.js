/* Password Securex 7.5 — app shell only. Third-party advertising is never cached. */
const CACHE='password-securex-shell-v75-fix1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icons/securex-192.png','./icons/securex-512.png','./icons/securex-logo.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()).catch(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(n=>n!==CACHE && (/securex/i.test(n)||/password/i.test(n))).map(n=>caches.delete(n)));await self.clients.claim();})());});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 if(!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(request.mode==='navigate'){
   event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{});}return response;}).catch(async()=>await caches.match('./index.html')||Response.error()));
 }else{
   event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response.ok)caches.open(CACHE).then(c=>c.put(request,response.clone())).catch(()=>{});return response;})));
 }
});
