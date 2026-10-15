
(()=>{
 "use strict";
 const box=document.getElementById('adPreferences');if(!box||!window.SecurexAds)return;
 const current=SecurexAds.consentValue;
 if(current!=='pending'){box.dataset.saved='true';box.querySelector('.preference-status').hidden=false;}
 function expand(){box.dataset.saved='false';box.querySelector('.preference-status').hidden=true;box.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});box.querySelector('button').focus({preventScroll:true});}
 document.getElementById('sxAdSettings')?.addEventListener('click',expand);
 box.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{
  const v=b.dataset.consent;if(!['standard','rejected'].includes(v))return;
  try{localStorage.setItem(SecurexAds.STORAGE,v);location.reload();}catch(_){const p=box.querySelector('.preference-status');p.hidden=false;p.textContent=document.documentElement.lang==='en'?'This browser cannot save the setting. Advertising stays disabled.':'El navegador no permite guardar la preferencia. La publicidad sigue desactivada.';}
 }));
})();
