/* Offline demo only: resolve local page links, retaining fragments and query strings. */
(()=>{
 if(location.protocol!=='file:')return;
 const prefix=document.body.dataset.depth==='1'?'../':'./';
 document.querySelectorAll('a[href]').forEach(a=>{
  const h=a.getAttribute('href');if(!h||/^(?:[a-z]+:|#|\/\/)/i.test(h))return;
  try{
   const path=h.startsWith('/')?prefix+h.slice(1):h;
   const u=new URL(path,document.baseURI);
   if(u.protocol!=='file:')return;
   if(u.pathname.endsWith('/'))u.pathname+='index.html';
   a.setAttribute('href',u.href);
  }catch(_){}
 });
})();
