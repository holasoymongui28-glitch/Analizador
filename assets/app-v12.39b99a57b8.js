/* Outer UI: no secret values, no secret persistence and no copy proxy. */
window.SecurexHost=(()=>{
  "use strict";
  const ENGINE_HTML=null;
  const translations={"es": {"skip": "Ir a la herramienta", "brandSub": "SECURITY ENGINE / V12", "online": "CONEXIÓN ACTIVA", "offline": "SIN CONEXIÓN", "eyebrow": "CYBERSECURITY ANALYSIS SYSTEM", "hero1": "LA SEGURIDAD", "hero2": "EMPIEZA AQUÍ", "heroDesc": "Analizador y generador de contraseñas gratis. Comprueba una clave de prueba y aprende a crear contraseñas más fuertes.", "pill1": "Análisis instantáneo", "pill2": "Generación criptográfica", "pill3": "Sin historial de claves", "navAnalyze": "Analizar", "navGenerate": "Generar", "navGuide": "Aprender", "clearAll": "Limpiar", "clearAllLabel": "Borrar la contraseña analizada y la generada. Atajo: Escape", "copied": "Copiada al portapapeles. Puede quedar disponible para otras aplicaciones.", "reportDone": "Diagnóstico exportado sin incluir la contraseña.", "guideModule": "PREGUNTAS FRECUENTES", "guideTitle": "Cinco respuestas claras.", "guideDesc": "Lo esencial para utilizar Password Securex con criterio.", "faq1q": "¿Qué indica la puntuación?", "faq1a": "Resume la valoración de la estructura: longitud, variedad y patrones detectados. No es un porcentaje de seguridad ni comprueba si una contraseña se ha filtrado.", "faq3q": "¿El tiempo estimado es exacto?", "faq3a": "No. Es un escenario hipotético de 10.000 intentos por segundo. En una cuenta real influyen el almacenamiento, los límites de acceso, el hardware y las filtraciones.", "faq4q": "¿Cómo funciona el generador?", "faq4a": "Selecciona caracteres o palabras con aleatoriedad criptográfica. Genera una clave distinta para cada cuenta y guárdala en un gestor. El modo PIN se encuentra en Opciones avanzadas.", "faq5q": "¿La herramienta es gratuita?", "faq5a": "Sí. Puedes analizar y generar sin registrarte. La publicidad es opcional; rechazarla no bloquea las herramientas.", "sources": "REFERENCIAS TÉCNICAS", "footerDesc": "Analiza contraseñas, genera claves aleatorias y entiende cómo mejorar tu seguridad. Sin cuentas y sin historial de contraseñas.", "footerLegal": "Estimaciones orientativas, sin garantía de seguridad. El documento exterior incluye scripts publicitarios de terceros. La separación del motor reduce el acceso directo a los campos, pero no equivale a una garantía frente a una página o dispositivo comprometidos. La herramienta no comprueba filtraciones.", "footerPrivacy": "Privacidad", "footerTop": "Volver arriba", "footerInstall": "Instalar aplicación", "footerStatus1": "STATUS: OPERATIONAL", "footerStatus2": "INTERFACE: REACTIVE", "footerStatus3": "PASSWORD HISTORY: NONE", "copyright": "© 2026 Password Securex · Versión 12.0", "adLabel": "CONTENIDO PROMOCIONADO", "adPlaceholder": "ESPACIO PUBLICITARIO", "cleared": "Se han vaciado los campos y las referencias de esta sesión. El portapapeles no se ha modificado.", "autoCleared": "Claves eliminadas de la sesión tras 5 minutos sin interacción.", "noScript": "Activa JavaScript para utilizar la herramienta. No es necesario crear una cuenta.", "heroAnalyze": "ANALIZAR CONTRASEÑA", "heroGenerate": "CREAR UNA CLAVE", "heroScroll": "EXPLORA LA HERRAMIENTA", "securityNotice": "Tu seguridad, sin complicaciones.", "securityNoticeText": "La herramienta está separada de los scripts publicitarios. Por precaución, no introduzcas claves que ya protejan tus cuentas.", "faq9q": "¿Cómo funciona el generador de contraseñas?", "faq9a": "El generador utiliza aleatoriedad criptográfica para elegir caracteres o palabras. En las contraseñas de caracteres se garantiza la presencia de todos los tipos seleccionados. El número de bits describe el proceso de generación, pero no certifica la seguridad de una cuenta.", "engineLoading": "Preparando el analizador…", "engineError": "No se ha podido iniciar el motor. Recarga esta página.", "marquee1": "CONTRASEÑAS", "marquee2": "ENTROPÍA", "marquee3": "SEGURIDAD", "marquee4": "GENERADOR", "marquee5": "PROTECCIÓN", "marquee6": "SECUREX", "marqueePause": "Contraseñas, entropía, seguridad, generador, protección, Securex. Pulsa para pausar la franja.", "marqueeResume": "Franja en pausa. Pulsa para reanudar el movimiento.", "marqueeStatic": "Contraseñas, entropía, seguridad, generador, protección, Securex.", "contactLabel": "CONTÁCTANOS", "aboutTitle": "Seguridad que se entiende.", "aboutDesc": "Password Securex es una herramienta web para particulares: analiza construcciones de prueba y genera nuevas claves con un resultado fácil de interpretar.", "aboutPrinciple": "Claridad, antes que promesas.", "aboutText": "Explicamos los límites del análisis y mantenemos sus funciones esenciales accesibles sin una cuenta. No certificamos la seguridad de tus cuentas ni consultamos bases de filtraciones.", "contactTitle": "Hablemos de Securex.", "contactDesc": "Dudas, sugerencias o un fallo de la herramienta. No envíes contraseñas ni datos sensibles.", "writeEmail": "Escribir un correo", "copyEmail": "Copiar dirección", "contactHint": "El enlace abre tu aplicación de correo.", "contactCopied": "Dirección copiada.", "contactCopyError": "No se pudo copiar. Selecciona la dirección y cópiala manualmente.", "faqLink": "Preguntas frecuentes", "aboutLabel": "Sobre nosotros", "compareLink": "Comparar claves de prueba", "methodLink": "Metodología y límites", "glossaryLink": "Definiciones", "faq2q": "¿Puedo introducir mi contraseña actual?", "faq2a": "Por precaución, utiliza una clave de prueba. Las herramientas se ejecutan en un documento separado de los anuncios; esta separación no protege frente a una página, extensión o dispositivo comprometidos."}, "en": {"skip": "Skip to tool", "brandSub": "SECURITY ENGINE / V12", "online": "CONNECTED", "offline": "OFFLINE", "eyebrow": "CYBERSECURITY ANALYSIS SYSTEM", "hero1": "SECURITY", "hero2": "STARTS HERE", "heroDesc": "Free password analyzer and generator. Check a sample password and learn how to create stronger credentials.", "pill1": "Instant analysis", "pill2": "Cryptographic generation", "pill3": "No password history", "navAnalyze": "Analyze", "navGenerate": "Generate", "navGuide": "Learn", "clearAll": "Clear", "clearAllLabel": "Clear both analyzed and generated passwords. Shortcut: Escape", "copied": "Copied to the clipboard. Other applications may be able to access it.", "reportDone": "Diagnosis exported without the password.", "guideModule": "FREQUENTLY ASKED QUESTIONS", "guideTitle": "Five clear answers.", "guideDesc": "What you need to know to use Password Securex thoughtfully.", "faq1q": "What does the score mean?", "faq1a": "It summarizes length, character types and detected patterns. It is not a security percentage and does not check whether a password has been breached.", "faq3q": "Is the estimated time exact?", "faq3a": "No. It assumes a hypothetical 10,000 guesses per second. Real accounts depend on storage, rate limits, hardware and previous breaches.", "faq4q": "How does the generator work?", "faq4a": "It chooses characters or words using cryptographic randomness. Generate a different password for each account and store it in a password manager. PIN mode is under Advanced options.", "faq5q": "Is the tool free?", "faq5a": "Yes. Analyze and generate without registering. Advertising is optional; declining it does not block the tools.", "sources": "TECHNICAL REFERENCES", "footerDesc": "Analyze passwords, generate random credentials and learn how to strengthen your security. No accounts and no password history.", "footerLegal": "Illustrative estimates, not a security guarantee. The outer document includes third-party advertising scripts. Separating the engine reduces direct access to fields, but does not guarantee protection from a compromised page or device. The tool does not check breach databases.", "footerPrivacy": "Privacy", "footerTop": "Back to top", "footerInstall": "Install app", "footerStatus1": "STATUS: OPERATIONAL", "footerStatus2": "INTERFACE: REACTIVE", "footerStatus3": "PASSWORD HISTORY: NONE", "copyright": "© 2026 Password Securex · Version 12.0", "adLabel": "PROMOTED CONTENT", "adPlaceholder": "ADVERTISING SPACE", "cleared": "Session fields and secret references cleared. The clipboard was not modified.", "autoCleared": "Passwords cleared after 5 minutes without interaction.", "noScript": "Enable JavaScript to use the tool. No account is needed.", "heroAnalyze": "ANALYZE PASSWORD", "heroGenerate": "CREATE A PASSWORD", "heroScroll": "EXPLORE THE TOOL", "securityNotice": "Your security, without complications.", "securityNoticeText": "The tool is separated from advertising scripts. As a precaution, do not enter passwords already protecting your accounts.", "faq9q": "How does the password generator work?", "faq9a": "The generator uses cryptographic randomness to choose characters or words. Character passwords contain every selected type. The bit count describes the generation process, but does not certify the security of an account.", "engineLoading": "Preparing the scanner…", "engineError": "The engine could not start. Reload this page.", "marquee1": "PASSWORDS", "marquee2": "ENTROPY", "marquee3": "SECURITY", "marquee4": "GENERATOR", "marquee5": "PROTECTION", "marquee6": "SECUREX", "marqueePause": "Passwords, entropy, security, generator, protection, Securex. Press to pause the strip.", "marqueeResume": "Strip paused. Press to resume movement.", "marqueeStatic": "Passwords, entropy, security, generator, protection, Securex.", "contactLabel": "CONTACT US", "aboutTitle": "Security you can understand.", "aboutDesc": "Password Securex is a web tool for individuals: analyze test constructions and generate new passwords with results that are easy to interpret.", "aboutPrinciple": "Clarity before promises.", "aboutText": "We explain the limits of the analysis and keep core features accessible without an account. We do not certify account security or query breach databases.", "contactTitle": "Let’s talk about Securex.", "contactDesc": "Questions, suggestions or a problem with the tool. Never include passwords or sensitive information.", "writeEmail": "Write an email", "copyEmail": "Copy address", "contactHint": "The link opens your email application.", "contactCopied": "Address copied.", "contactCopyError": "Could not copy. Select the address and copy it manually.", "faqLink": "Frequently asked questions", "aboutLabel": "About us", "compareLink": "Compare test passwords", "methodLink": "Method and limits", "glossaryLink": "Definitions", "faq2q": "Should I enter my current password?", "faq2a": "As a precaution, use a test password. Tools run in a document separated from advertising. This does not protect against a compromised page, extension or device."}};
  const $=id=>document.getElementById(id);
  const motion=matchMedia("(prefers-reduced-motion:reduce)");
  let engine=document.getElementById("secureEngine"),language="es",layout=null,ready=false,started=false;
  let palette=["#00ff66","0,255,102"],toastTimer=0,installPrompt=null;
  let rainTimer=0,columns=[],rainWidth=0,rainHeight=0,ctx=null;
  const preferenceKey="securex.language.v7";
  try{language=(localStorage.getItem(preferenceKey)||localStorage.getItem("securex.language.v5"))==="en"?"en":"es";}catch(_){}
  const queryLang=new URLSearchParams(location.search).get("lang");if(queryLang==="en"||queryLang==="es")language=queryLang;
  function t(key){return translations[language][key]??key;}
  function send(data){engine?.contentWindow?.postMessage({channel:"securex6",...data},"*");}
  function notice(key){const el=$("toast");if(!el)return;el.textContent=t(key);el.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.hidden=true,4200);}
  function theme(score){
    if(!Number.isInteger(score)||score<0||score>5)return;
    palette=score>0&&score<=2?["#ff3858","255,56,88"]:score===3?["#ff9f38","255,159,56"]:["#00ff66","0,255,102"];
    const root=document.documentElement;root.style.setProperty("--accent",palette[0]);root.style.setProperty("--accent-rgb",palette[1]);root.dataset.level=score===0?"ready":score<=2?"weak":score===3?"fair":"strong";
    if(ctx&&!document.hidden&&!motion.matches)drawRain(false);
  }
  function positionAds(data){
    if(!Number.isFinite(data.height)||data.height<100||data.height>18000||![data.analyzer,data.generator].every(n=>Number.isFinite(n)&&n>=0&&n<18000))return;
    layout=data;engine.style.height=data.height+"px";updateNav();
  }
  let enginePromise=null,engineResolve=null,engineReject=null,engineObserver=null,pendingTarget=null;
  function mount(){
    if(enginePromise)return enginePromise;
    engine=$("secureEngine");
    enginePromise=new Promise((resolve,reject)=>{
      engineResolve=resolve;engineReject=reject;
      const timeout=setTimeout(()=>{if(!ready){$("engineLoading").hidden=false;$("engineLoading").textContent=t("engineError");engineReject(new Error("engine-timeout"));}},15000);
      const script=document.createElement("script");script.src="./assets/engine-v12.c5dfff7d3e.js";script.async=true;
      script.onerror=()=>{clearTimeout(timeout);$("engineLoading").hidden=false;$("engineLoading").textContent=t("engineError");engineReject(new Error("engine-load"));};
      script.onload=()=>{engine.addEventListener("load",()=>{send({type:"language",language});send({type:"layoutRequest"});},{once:true});engine.srcdoc=window.SecurexEngineHTML;delete window.SecurexEngineHTML;};
      document.head.append(script);
    });
    enginePromise.catch(()=>{});return enginePromise;
  }
  const allowedNotices=new Set(["cleared","autoCleared","copied","reportDone"]);
  addEventListener("message",event=>{
    if(!engine||event.source!==engine.contentWindow||event.origin!=="null")return;
    const data=event.data;if(!data||data.channel!=="securex6")return;
    if(data.type==="ready"){
      ready=true;if($("engineLoading"))$("engineLoading").hidden=true;if(engineResolve)engineResolve();
      send({type:"language",language});send({type:"layoutRequest"});
      if(!pendingTarget&&["#analyzer","#generator"].includes(location.hash))setTimeout(()=>navigate(location.hash.slice(1),false),80);
    }
    if(data.type==="reference"&&["metodologia","glosario"].includes(data.target)){
      location.href=location.protocol==="file:"?"./"+data.target+"/index.html":"./"+data.target+"/";
    }
    if(data.type==="theme")theme(data.score);
    if(data.type==="pointer"&&!motion.matches&&Number.isFinite(data.x)&&Number.isFinite(data.y)&&data.x>=0&&data.x<2000&&data.y>=0&&data.y<16000){
      const r=engine.getBoundingClientRect();document.documentElement.style.setProperty("--mouse-x",(r.left+data.x)+"px");document.documentElement.style.setProperty("--mouse-y",(r.top+data.y)+"px");
    }
    if(data.type==="layout")positionAds(data);
    if(data.type==="editing"&&typeof data.active==="boolean")document.body.classList.toggle("v11-editing",data.active);
    if(data.type==="notice"&&allowedNotices.has(data.key))notice(data.key);
    if(data.type==="navigate"&&["analyzer","generator"].includes(data.target))navigate(data.target);
  });
  function navOffset(){if(matchMedia("(max-width:767px)").matches)return 18;const nav=document.querySelector(".worknav");return (nav?.getBoundingClientRect().height||68)+26;}
  let navIntent=null,navUntil=0;
  async function navigate(target,focus=true){
    if(["analyzer","generator"].includes(target)){
      pendingTarget=target;
      if(!ready){$("engineShell").scrollIntoView({block:"start",behavior:motion.matches?"auto":"smooth"});try{await mount();}catch(_){pendingTarget=null;return;}}
      for(let i=0;!layout&&i<30;i++)await new Promise(r=>setTimeout(r,40));
      if(pendingTarget!==target)return;pendingTarget=null;
    }

    navIntent=target==="generator"?"generator":target==="analyzer"?"analyzer":null;
    navUntil=performance.now()+1100;if(navIntent)paintNav(navIntent);
    let top;
    if(["guide","about","workspace","contact"].includes(target)){
      const el=$(target);if(!el)return;top=el.getBoundingClientRect().top+scrollY-navOffset();
    }else{
      if(!layout||!["analyzer","generator"].includes(target))return;
      const offset=Number(layout[target]);if(!Number.isFinite(offset)||offset<0||offset>16000)return;
      top=engine.getBoundingClientRect().top+scrollY+offset-navOffset();
    }
    window.scrollTo({top:Math.max(0,top),behavior:motion.matches?"auto":"smooth"});
    if(focus&&target==="analyzer"&&matchMedia("(pointer:fine)").matches)send({type:"focus",target});
    try{history.replaceState(null,"",'#'+target);}catch(_){}
  }
  function translate(next){
    if(next!=="es"&&next!=="en")return;
    language=next;document.documentElement.lang=next;
    document.querySelectorAll("[data-i18n]").forEach(el=>{const value=t(el.dataset.i18n);if(typeof value==="string")el.textContent=value;});
    document.querySelectorAll("[data-label]").forEach(el=>el.setAttribute("aria-label",t(el.dataset.label)));
    const button=$("languageButton");button.textContent=next==="es"?"ES / EN":"EN / ES";button.setAttribute("aria-label",next==="es"?"Switch language to English":"Cambiar idioma a español");
    document.querySelector(".worknav").setAttribute("aria-label",next==="es"?"Herramientas":"Tools");
    engine.title=next==="es"?"Escáner y generador de contraseñas":"Password scanner and generator";
    document.querySelectorAll(".sidebar,.sx-sponsored").forEach(el=>el.setAttribute("aria-label",next==="es"?"Publicidad":"Advertising"));
    updateConnection();send({type:"language",language});syncRibbon();requestAnimationFrame(updateNav);
    try{localStorage.setItem(preferenceKey,language);}catch(_){}
  }
  function updateConnection(){if(!$("connectionText"))return;$("connectionText").textContent=t(navigator.onLine?"online":"offline");$("connectionBadge").classList.toggle("offline",!navigator.onLine);}
  function sizeRain(){
    const canvas=$("codeRain");rainWidth=innerWidth;rainHeight=innerHeight;
    canvas.width=rainWidth;canvas.height=rainHeight; // 1x DPR avoids a large GPU buffer.
    const n=Math.min(76,Math.ceil(rainWidth/28));
    columns=Array.from({length:n},(_,i)=>({x:Math.floor((i+.5)*rainWidth/n),y:(i*127)%Math.max(1,rainHeight),speed:5+(i%4)*2}));
  }
  function drawRain(advance=true){
    if(!ctx||document.hidden)return;
    const chars="01ABCDEF<>[]{}",phase=Math.floor(performance.now()/250);ctx.clearRect(0,0,rainWidth,rainHeight);ctx.font="11px monospace";ctx.textAlign="center";
    for(const col of columns){for(let i=0;i<7;i++){const y=col.y-i*20;if(y>0&&y<rainHeight){ctx.fillStyle=`rgba(${palette[1]},${.44-i*.056})`;ctx.fillText(chars[(phase+i+col.x)%chars.length],col.x,y);}}if(advance)col.y+=col.speed;if(col.y>rainHeight+150)col.y=-100;}
  }
  function updateEffects(){
    clearInterval(rainTimer);rainTimer=0;$("codeRain").hidden=motion.matches;
    if(!motion.matches&&!document.hidden&&ctx){drawRain();rainTimer=setInterval(drawRain,innerWidth<620?167:100);}else ctx?.clearRect(0,0,rainWidth,rainHeight);
  }
  let pointerFrame=0,px=0,py=0,scrollFrame=0;
  let paintedNav="";
  function paintNav(target){
    if(paintedNav!==target){
      paintedNav=target;document.querySelectorAll('[data-nav]').forEach(el=>el.setAttribute('aria-current',String(el.dataset.nav===target)));
      const slider=document.querySelector('.nav-active');const index=['analyzer','generator'].indexOf(target);
      if(slider)slider.style.transform='translateX('+(Math.max(0,index)*100)+'%)';
    }
    const current=$("currentSection");if(current)current.textContent=t(target==='analyzer'?'navAnalyze':target==='generator'?'navGenerate':'navGuide').toUpperCase();
  }
  function updateNav(){
    if(!layout||!engine)return;
    if(navIntent&&performance.now()<navUntil){paintNav(navIntent);return;}
    navIntent=null;
    const origin=engine.getBoundingClientRect().top,cut=Math.min(innerHeight*.4,240);
    paintNav(origin+layout.generator<cut?"generator":"analyzer");
  }
  function observeAds(){
    document.querySelectorAll(".ad-slot").forEach(host=>{
      const check=()=>{if(host.querySelector("iframe,img,ins,object"))host.dataset.adState="rendered";};
      const observer=new MutationObserver(check);observer.observe(host,{childList:true,subtree:true});check();setTimeout(()=>observer.disconnect(),25000);
    });

  }
  async function registerOffline(){
    if(!window.isSecureContext||!("serviceWorker" in navigator)||!/^https?:$/.test(location.protocol))return;
    try{const registration=await navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"});registration.update().catch(()=>{});}catch(_){}
  }

  let ribbonVisible=false,ribbonPaused=false;
  function syncRibbon(){
    const band=$("securityRibbon");if(!band)return;
    document.documentElement.classList.toggle("is-background",document.hidden);
    band.classList.toggle("is-visible",ribbonVisible&&!document.hidden);
    band.dataset.paused=String(ribbonPaused||motion.matches);
    band.setAttribute("aria-pressed",String(ribbonPaused));
    band.setAttribute("aria-label",t(motion.matches?"marqueeStatic":ribbonPaused?"marqueeResume":"marqueePause"));
    band.setAttribute("aria-disabled",String(motion.matches));
    band.tabIndex=motion.matches?-1:0;
  }
  function setupRibbon(){
    const band=$("securityRibbon");
    const toggle=()=>{if(motion.matches)return;ribbonPaused=!ribbonPaused;syncRibbon();};
    band.addEventListener("click",toggle);
    band.addEventListener("keydown",event=>{if(event.key===" "||event.key==="Enter"){event.preventDefault();toggle();}});
    if("IntersectionObserver" in window){new IntersectionObserver(entries=>{ribbonVisible=entries[0].isIntersecting;syncRibbon();},{rootMargin:"40px"}).observe(band);}else ribbonVisible=true;
    motion.addEventListener("change",syncRibbon);document.addEventListener("visibilitychange",syncRibbon);syncRibbon();
    document.querySelectorAll(".card").forEach(card=>{
      let frame=0,x=0,y=0;
      card.addEventListener("pointermove",event=>{if(motion.matches||event.pointerType==="touch"||!matchMedia("(pointer:fine)").matches)return;const r=card.getBoundingClientRect();x=event.clientX-r.left;y=event.clientY-r.top;if(frame)return;frame=requestAnimationFrame(()=>{frame=0;card.style.setProperty("--section-x",x+"px");card.style.setProperty("--section-y",y+"px");});},{passive:true});
      card.addEventListener("pointerleave",()=>{cancelAnimationFrame(frame);frame=0;card.style.removeProperty("--section-x");card.style.removeProperty("--section-y");});
    });
  }

  function start(){
    if(started)return;started=true;
    translate(language);observeAds();setupRibbon();
    if("IntersectionObserver" in window){
      engineObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){mount();engineObserver.disconnect();}},{rootMargin:"220px"});engineObserver.observe($("engineShell"));
      new IntersectionObserver(entries=>{document.body.classList.toggle("v11-in-tools",!entries[0].isIntersecting);}).observe($("heroTitle"));
    }else{mount();document.body.classList.add("v11-in-tools");}
    if(["#analyzer","#generator"].includes(location.hash))navigate(location.hash.slice(1),false);

    new ResizeObserver(()=>requestAnimationFrame(updateNav)).observe(document.querySelector('.nav-links'));
    window.addEventListener('hashchange',()=>{const target=location.hash.slice(1);if(['analyzer','generator','guide','about','contact','workspace'].includes(target))navigate(target,false);});
    $("languageButton").addEventListener("click",()=>translate(language==="es"?"en":"es"));
    $("clearAll").addEventListener("click",()=>send({type:"clear"}));
    document.querySelectorAll("[data-go]").forEach(a=>a.addEventListener("click",event=>{event.preventDefault();navigate(a.dataset.go);}));
    document.querySelector(".skip-link").addEventListener("click",event=>{event.preventDefault();navigate("analyzer");});
    $("footerPrivacyLink").addEventListener("click",()=>$("privacyDetails").open=true);
    document.addEventListener("keydown",event=>{if(event.key==="Escape")send({type:"clear"});});
    try{ctx=$("codeRain").getContext("2d",{alpha:true});}catch(_){}
    requestAnimationFrame(()=>requestAnimationFrame(()=>{sizeRain();updateEffects();}));
    document.addEventListener("pointermove",event=>{
      if(motion.matches||event.pointerType==="touch"||!matchMedia("(pointer:fine)").matches)return;px=event.clientX;py=event.clientY;
      if(pointerFrame)return;pointerFrame=requestAnimationFrame(()=>{document.documentElement.style.setProperty("--mouse-x",px+"px");document.documentElement.style.setProperty("--mouse-y",py+"px");pointerFrame=0;});
    },{passive:true});
    let resize=0;addEventListener("resize",()=>{clearTimeout(resize);resize=setTimeout(()=>{sizeRain();updateEffects();send({type:"layoutRequest"});},150);},{passive:true});
    addEventListener("scroll",()=>{if(scrollFrame)return;scrollFrame=requestAnimationFrame(()=>{updateNav();scrollFrame=0;});},{passive:true});
    motion.addEventListener("change",updateEffects);
    document.addEventListener("visibilitychange",()=>{if(document.hidden)send({type:"mask"});updateEffects();});
    addEventListener("pagehide",()=>{clearInterval(rainTimer);send({type:"clear"});});
    addEventListener("pageshow",event=>{if(event.persisted){send({type:"clear"});send({type:"layoutRequest"});}updateEffects();});
    addEventListener("online",updateConnection);addEventListener("offline",updateConnection);
    addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPrompt=event;$("installButton").hidden=false;});
    $("installButton").addEventListener("click",async()=>{if(!installPrompt)return;try{await installPrompt.prompt();await installPrompt.userChoice;}catch(_){}installPrompt=null;$("installButton").hidden=true;});
    addEventListener("appinstalled",()=>{$("installButton").hidden=true;installPrompt=null;});
    setTimeout(()=>{if("requestIdleCallback" in window)requestIdleCallback(registerOffline,{timeout:5000});else registerOffline();},6000);
  }
  return Object.freeze({mount,start,navigate});
})();


(()=>{
 const $=id=>document.getElementById(id),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const copies={"es": {"aboutTitle": "Seguridad que se entiende.", "aboutDesc": "Password Securex es una herramienta web para particulares: analiza construcciones de prueba y genera nuevas claves con un resultado fácil de interpretar.", "aboutPrinciple": "Claridad, antes que promesas.", "aboutText": "Explicamos los límites del análisis y mantenemos sus funciones esenciales accesibles sin una cuenta. No certificamos la seguridad de tus cuentas ni consultamos bases de filtraciones.", "contactTitle": "Hablemos de Securex.", "contactDesc": "Dudas, sugerencias o un fallo de la herramienta. No envíes contraseñas ni datos sensibles.", "writeEmail": "Escribir un correo", "copyEmail": "Copiar dirección", "contactHint": "El enlace abre tu aplicación de correo.", "contactCopied": "Dirección copiada.", "contactCopyError": "No se pudo copiar. Selecciona la dirección y cópiala manualmente.", "faqLink": "Preguntas frecuentes", "aboutLabel": "Sobre nosotros", "compareLink": "Comparar claves de prueba", "methodLink": "Metodología y límites", "glossaryLink": "Definiciones", "adLabel": "CONTENIDO PROMOCIONADO", "adPlaceholder": "ESPACIO PUBLICITARIO", "guideTitle": "Cinco respuestas claras.", "guideDesc": "Lo esencial para utilizar Password Securex con criterio.", "brandSub": "SECURITY ENGINE / V12", "copyright": "© 2026 Password Securex · Versión 12.0"}, "en": {"aboutTitle": "Security you can understand.", "aboutDesc": "Password Securex is a web tool for individuals: analyze test constructions and generate new passwords with results that are easy to interpret.", "aboutPrinciple": "Clarity before promises.", "aboutText": "We explain the limits of the analysis and keep core features accessible without an account. We do not certify account security or query breach databases.", "contactTitle": "Let’s talk about Securex.", "contactDesc": "Questions, suggestions or a problem with the tool. Never include passwords or sensitive information.", "writeEmail": "Write an email", "copyEmail": "Copy address", "contactHint": "The link opens your email application.", "contactCopied": "Address copied.", "contactCopyError": "Could not copy. Select the address and copy it manually.", "faqLink": "Frequently asked questions", "aboutLabel": "About us", "compareLink": "Compare test passwords", "methodLink": "Method and limits", "glossaryLink": "Definitions", "adLabel": "PROMOTED CONTENT", "adPlaceholder": "ADVERTISING SPACE", "guideTitle": "Five clear answers.", "guideDesc": "What you need to know to use Password Securex thoughtfully.", "brandSub": "SECURITY ENGINE / V12", "copyright": "© 2026 Password Securex · Version 12.0"}};
 const tr=k=>copies[document.documentElement.lang==='en'?'en':'es'][k];
 $('copyContact')?.addEventListener('click',async()=>{
   try{
     if(!navigator.clipboard?.writeText)throw Error('clipboard');
     await navigator.clipboard.writeText('passwordsecurex@protonmail.com');$('contactFeedback').textContent=tr('contactCopied');
   }catch(_){$('contactFeedback').textContent=tr('contactCopyError');}
 });
 document.querySelectorAll('#guide details').forEach(d=>{
   const s=d.querySelector('summary'),p=d.querySelector('p');let a=null,desired=d.open,seq=0;
   s.addEventListener('click',e=>{
     if(reduced.matches||!p.animate)return;
     e.preventDefault();desired=a?!desired:!d.open;const ticket=++seq;
     const from=d.open?p.getBoundingClientRect().height:0,opacity=d.open?getComputedStyle(p).opacity:'0';
     a?.cancel();d.open=true;const to=desired?p.getBoundingClientRect().height:0;
     a=p.animate([{height:from+'px',opacity,overflow:'hidden'},{height:to+'px',opacity:desired?1:0,overflow:'hidden'}],{duration:desired?280:210,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'});
     a.onfinish=()=>{if(ticket!==seq)return;d.open=desired;a.cancel();a=null;};
   });
 });
 const top=$('backTop');if(top){let frame=0;addEventListener('scroll',()=>{if(!frame)frame=requestAnimationFrame(()=>{frame=0;top.hidden=scrollY<innerHeight*1.4;});},{passive:true});top.addEventListener('click',()=>scrollTo({top:0,behavior:reduced.matches?'auto':'smooth'}));}
 const pref={es:{adtitle:'Publicidad opcional',addesc:'Puedes utilizar todas las herramientas sin anuncios. Al aceptar, el proveedor puede tratar datos de navegación.',accept:'Aceptar banners',reject:'Sin publicidad',reload:'Cambiar la elección recarga la página y vacía los campos.',saved:'Preferencia guardada. Puedes cambiarla desde el pie de página.',demo:'Espacio reservado. No se carga publicidad en esta demo.'},en:{adtitle:'Optional advertising',addesc:'All tools work without ads. If you accept, the provider may process browsing data.',accept:'Accept banners',reject:'No advertising',reload:'Changing this choice reloads the page and clears fields.',saved:'Preference saved. Change it from the footer.',demo:'Reserved space. No advertising loads in this demo.'}};
 const localize=()=>{const d=pref[document.documentElement.lang==='en'?'en':'es'];document.querySelectorAll('[data-v11]').forEach(e=>{if(d[e.dataset.v11])e.textContent=d[e.dataset.v11];});};
 new MutationObserver(localize).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});localize();
})();
SecurexHost.start();
