/* Only improves folder links when the demo is opened as a file. No networking or tracking. */
if(location.protocol==='file:')document.querySelectorAll('a[href]').forEach(a=>{const raw=a.getAttribute('href');if(!raw||/^(?:[a-z]+:|#)/i.test(raw))return;const u=new URL(raw,location.href);if(u.pathname.endsWith('/')){u.pathname+='index.html';a.href=u.href;}});
