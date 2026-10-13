/* Securex 7.1 — public application assets only. No password or report caching. */
'use strict';
const BASE=new URL('./',self.location.href);
const PREFIX='password-securex:'+BASE.pathname+':';
const CACHE=PREFIX+'7.1.0';
const SHELL=['index.html','manifest.webmanifest','icons/securex-192.png','icons/securex-512.png'].map(path=>new URL(path,BASE).href);
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>(key.startsWith(PREFIX)&&key!==CACHE)||key==='securex-v3-20261013').map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request,url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
  const relative=url.pathname.slice(BASE.pathname.length);
  if(req.mode==='navigate'&&(relative===''||relative==='index.html')){
    event.respondWith(fetch(req).then(response=>{
      if(response.ok&&response.type==='basic'){
        const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(SHELL[0],copy)));
      }
      return response;
    }).catch(async()=>(await caches.match(SHELL[0]))||Response.error()));
  }else if(SHELL.slice(1).includes(url.href)){
    event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(req))||fetch(req)));
  }
});
