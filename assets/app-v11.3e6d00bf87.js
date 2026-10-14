/* Outer UI: no secret values, no secret persistence and no copy proxy. */
window.SecurexHost=(()=>{
  "use strict";
  const ENGINE_HTML=null;
  const translations={"es": {"skip": "Ir a la herramienta", "brandSub": "SECURITY ENGINE / V11.0", "online": "CONEXIÓN ACTIVA", "offline": "SIN CONEXIÓN", "eyebrow": "CYBERSECURITY ANALYSIS SYSTEM", "hero1": "LA SEGURIDAD", "hero2": "EMPIEZA AQUÍ", "heroDesc": "Analizador y generador de contraseñas gratis. Comprueba una clave de prueba y aprende a crear contraseñas más fuertes.", "pill1": "Análisis instantáneo", "pill2": "Generación criptográfica", "pill3": "Sin historial de claves", "navAnalyze": "Analizar", "navGenerate": "Generar", "navGuide": "Aprender", "clearAll": "Limpiar", "clearAllLabel": "Borrar la contraseña analizada y la generada. Atajo: Escape", "copied": "Copiada al portapapeles. Puede quedar disponible para otras aplicaciones.", "reportDone": "Diagnóstico exportado sin incluir la contraseña.", "guideModule": "PREGUNTAS FRECUENTES", "guideTitle": "Resuelve tus dudas.", "guideDesc": "Respuestas claras sobre el análisis, la generación de claves y sus límites.", "faq1q": "¿Los bits son una medida exacta?", "faq1a": "Para texto elegido por una persona son una estimación heurística. Para una clave recién generada aquí, se calcula el espacio de selección del generador. Un número alto no demuestra que una clave no esté filtrada.", "faq3q": "¿Comprobáis contraseñas filtradas?", "faq3a": "No se consulta ninguna base de filtraciones. El escáner identifica coincidencias en una lista limitada y patrones previsibles. «Sin patrones» no significa «nunca filtrada».", "faq4q": "¿Cómo se tratan las contraseñas y los anuncios?", "faq4a": "El escáner y el generador funcionan en un documento separado, sin scripts publicitarios ni consultas de contraseñas a servidores. La página exterior carga publicidad de terceros. La separación impide leer directamente el campo, pero no protege frente a una página, extensión o dispositivo comprometidos. No uses claves que ya protejan tus cuentas.", "faq5q": "¿Por qué activar MFA o passkeys?", "faq5a": "La autenticación multifactor añade una comprobación adicional. Las passkeys usan criptografía de clave pública y vinculan la credencial al servicio, reduciendo riesgos de phishing. Su disponibilidad depende del servicio.", "sources": "REFERENCIAS TÉCNICAS", "footerDesc": "Analiza contraseñas, genera claves aleatorias y entiende cómo mejorar tu seguridad. Sin cuentas y sin historial de contraseñas.", "footerLegal": "Estimaciones orientativas, sin garantía de seguridad. El documento exterior incluye scripts publicitarios de terceros. La separación del motor reduce el acceso directo a los campos, pero no equivale a una garantía frente a una página o dispositivo comprometidos. La herramienta no comprueba filtraciones.", "footerPrivacy": "Privacidad", "footerTop": "Volver arriba", "footerInstall": "Instalar aplicación", "footerStatus1": "STATUS: OPERATIONAL", "footerStatus2": "INTERFACE: REACTIVE", "footerStatus3": "PASSWORD HISTORY: NONE", "copyright": "© 2026 Password Securex · Versión 11.0", "adLabel": "CONTENIDO PROMOCIONADO", "adPlaceholder": "ESPACIO PUBLICITARIO", "cleared": "Se han vaciado los campos y las referencias de esta sesión. El portapapeles no se ha modificado.", "autoCleared": "Claves eliminadas de la sesión tras 5 minutos sin interacción.", "noScript": "Activa JavaScript para utilizar la herramienta. No es necesario crear una cuenta.", "heroAnalyze": "ANALIZAR CONTRASEÑA", "heroGenerate": "CREAR UNA CLAVE", "heroScroll": "EXPLORA LA HERRAMIENTA", "securityNotice": "Tu seguridad, sin complicaciones.", "securityNoticeText": "La herramienta está separada de los scripts publicitarios. Por precaución, no introduzcas claves que ya protejan tus cuentas.", "faq9q": "¿Cómo funciona el generador de contraseñas?", "faq9a": "El generador utiliza aleatoriedad criptográfica para elegir caracteres o palabras. En las contraseñas de caracteres se garantiza la presencia de todos los tipos seleccionados. El número de bits describe el proceso de generación, pero no certifica la seguridad de una cuenta.", "engineLoading": "Preparando el analizador…", "engineError": "No se ha podido iniciar el motor. Recarga esta página.", "marquee1": "CONTRASEÑAS", "marquee2": "ENTROPÍA", "marquee3": "SEGURIDAD", "marquee4": "GENERADOR", "marquee5": "PROTECCIÓN", "marquee6": "SECUREX", "marqueePause": "Contraseñas, entropía, seguridad, generador, protección, Securex. Pulsa para pausar la franja.", "marqueeResume": "Franja en pausa. Pulsa para reanudar el movimiento.", "marqueeStatic": "Contraseñas, entropía, seguridad, generador, protección, Securex.", "contactLabel": "CONTÁCTANOS"}, "en": {"skip": "Skip to tool", "brandSub": "SECURITY ENGINE / V11.0", "online": "CONNECTED", "offline": "OFFLINE", "eyebrow": "CYBERSECURITY ANALYSIS SYSTEM", "hero1": "SECURITY", "hero2": "STARTS HERE", "heroDesc": "Free password analyzer and generator. Check a sample password and learn how to create stronger credentials.", "pill1": "Instant analysis", "pill2": "Cryptographic generation", "pill3": "No password history", "navAnalyze": "Analyze", "navGenerate": "Generate", "navGuide": "Learn", "clearAll": "Clear", "clearAllLabel": "Clear both analyzed and generated passwords. Shortcut: Escape", "copied": "Copied to the clipboard. Other applications may be able to access it.", "reportDone": "Diagnosis exported without the password.", "guideModule": "FREQUENTLY ASKED QUESTIONS", "guideTitle": "Get clear answers.", "guideDesc": "Clear answers about password analysis, generation and their limits.", "faq1q": "Are the bits an exact measure?", "faq1a": "For human-chosen text they are a heuristic estimate. For a password just generated here, the generator’s selection space is calculated. A high number does not prove a password has never been breached.", "faq3q": "Do you check breached passwords?", "faq3a": "No breach database is queried. The scanner identifies matches in a limited list and predictable patterns. “No patterns” does not mean “never breached”.", "faq4q": "How are passwords and ads handled?", "faq4a": "The scanner and generator run in a separate document without advertising scripts or password requests to servers. The outer page loads third-party ads. The separation prevents direct field access but cannot protect against a compromised page, extension or device. Do not enter passwords already protecting your accounts.", "faq5q": "Why enable MFA or passkeys?", "faq5a": "Multifactor authentication adds another check. Passkeys use public-key cryptography and bind the credential to the service, reducing phishing risks. Availability depends on the service.", "sources": "TECHNICAL REFERENCES", "footerDesc": "Analyze passwords, generate random credentials and learn how to strengthen your security. No accounts and no password history.", "footerLegal": "Illustrative estimates, not a security guarantee. The outer document includes third-party advertising scripts. Separating the engine reduces direct access to fields, but does not guarantee protection from a compromised page or device. The tool does not check breach databases.", "footerPrivacy": "Privacy", "footerTop": "Back to top", "footerInstall": "Install app", "footerStatus1": "STATUS: OPERATIONAL", "footerStatus2": "INTERFACE: REACTIVE", "footerStatus3": "PASSWORD HISTORY: NONE", "copyright": "© 2026 Password Securex · Version 11.0", "adLabel": "SPONSORED CONTENT", "adPlaceholder": "ADVERTISING SPACE", "cleared": "Session fields and secret references cleared. The clipboard was not modified.", "autoCleared": "Passwords cleared after 5 minutes without interaction.", "noScript": "Enable JavaScript to use the tool. No account is needed.", "heroAnalyze": "ANALYZE PASSWORD", "heroGenerate": "CREATE A PASSWORD", "heroScroll": "EXPLORE THE TOOL", "securityNotice": "Your security, without complications.", "securityNoticeText": "The tool is separated from advertising scripts. As a precaution, do not enter passwords already protecting your accounts.", "faq9q": "How does the password generator work?", "faq9a": "The generator uses cryptographic randomness to choose characters or words. Character passwords contain every selected type. The bit count describes the generation process, but does not certify the security of an account.", "engineLoading": "Preparing the scanner…", "engineError": "The engine could not start. Reload this page.", "marquee1": "PASSWORDS", "marquee2": "ENTROPY", "marquee3": "SECURITY", "marquee4": "GENERATOR", "marquee5": "PROTECTION", "marquee6": "SECUREX", "marqueePause": "Passwords, entropy, security, generator, protection, Securex. Press to pause the strip.", "marqueeResume": "Strip paused. Press to resume movement.", "marqueeStatic": "Passwords, entropy, security, generator, protection, Securex.", "contactLabel": "CONTACT US"}};
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
  function validBox(box){return box&&["top","left","width","height"].every(k=>Number.isFinite(box[k]))&&box.top>=0&&box.top<16000&&box.left>=0&&box.width>=0&&box.width<2000&&box.height>=0&&box.height<=1300;}
  function positionAds(data){
    if(!Number.isFinite(data.height)||data.height<100||data.height>16000||!validBox(data.inline)||!validBox(data.native))return;
    layout=data;engine.style.height=data.height+"px";
    for(const name of ["inline","native"]){
      const box=data[name],host=$(name+"AdWrapper");if(!host)continue;
      host.style.top=box.top+"px";host.style.left=box.left+"px";host.style.right=Math.max(0,engine.clientWidth-box.left-box.width)+"px";host.style.width="auto";
      host.hidden=box.height===0||(name==="inline"&&box.width<468);host.dataset.positioned="true";
    }
    updateNav();
  }
  let enginePromise=null,engineResolve=null,engineReject=null,engineObserver=null,pendingTarget=null;
  function mount(){
    if(enginePromise)return enginePromise;
    engine=$("secureEngine");
    enginePromise=new Promise((resolve,reject)=>{
      engineResolve=resolve;engineReject=reject;
      const timeout=setTimeout(()=>{if(!ready){$("engineLoading").hidden=false;$("engineLoading").textContent=t("engineError");engineReject(new Error("engine-timeout"));}},15000);
      const script=document.createElement("script");script.src="./assets/engine-v11.49914f6583.js";script.async=true;
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
      if(!pendingTarget&&["#analyzer","#generator","#comparator"].includes(location.hash))setTimeout(()=>navigate(location.hash.slice(1),false),80);
    }
    if(data.type==="theme")theme(data.score);
    if(data.type==="pointer"&&!motion.matches&&Number.isFinite(data.x)&&Number.isFinite(data.y)&&data.x>=0&&data.x<2000&&data.y>=0&&data.y<16000){
      const r=engine.getBoundingClientRect();document.documentElement.style.setProperty("--mouse-x",(r.left+data.x)+"px");document.documentElement.style.setProperty("--mouse-y",(r.top+data.y)+"px");
    }
    if(data.type==="layout")positionAds(data);
    if(data.type==="editing"&&typeof data.active==="boolean")document.body.classList.toggle("v11-editing",data.active);
    if(data.type==="notice"&&allowedNotices.has(data.key))notice(data.key);
    if(data.type==="navigate"&&["analyzer","generator","comparator"].includes(data.target))navigate(data.target);
  });
  function navOffset(){if(matchMedia("(max-width:767px)").matches)return 18;const nav=document.querySelector(".worknav");return (nav?.getBoundingClientRect().height||68)+26;}
  let navIntent=null,navUntil=0;
  async function navigate(target,focus=true){
    if(["analyzer","generator","comparator"].includes(target)){
      pendingTarget=target;
      if(!ready){$("engineShell").scrollIntoView({block:"start",behavior:motion.matches?"auto":"smooth"});try{await mount();}catch(_){pendingTarget=null;return;}}
      for(let i=0;!layout&&i<30;i++)await new Promise(r=>setTimeout(r,40));
      if(pendingTarget!==target)return;pendingTarget=null;
    }

    if(target==="comparator")send({type:"openComparison"});
    navIntent=["generator","comparator"].includes(target)?"generator":["guide","about","learningHub","learningLab","contact","pro"].includes(target)?"guide":"analyzer";
    navUntil=performance.now()+1100;paintNav(navIntent);
    let top;
    if(["guide","about","workspace","learningHub","learningLab","contact","pro"].includes(target)){
      const el=$(target);if(!el)return;top=el.getBoundingClientRect().top+scrollY-navOffset();
    }else{
      if(!layout||!["analyzer","generator","comparator"].includes(target))return;
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
      const slider=document.querySelector('.nav-active');const index=['analyzer','generator','guide'].indexOf(target);
      if(slider)slider.style.transform='translateX('+(Math.max(0,index)*100)+'%)';
    }
    const current=$("currentSection");if(current)current.textContent=t(target==='analyzer'?'navAnalyze':target==='generator'?'navGenerate':'navGuide').toUpperCase();
  }
  function updateNav(){
    if(!layout||!engine||!$("learningHub"))return;
    if(navIntent&&performance.now()<navUntil){paintNav(navIntent);return;}
    navIntent=null;
    const origin=engine.getBoundingClientRect().top,cut=Math.min(innerHeight*.4,240);
    const target=$("learningHub").getBoundingClientRect().top<cut?"guide":origin+layout.generator<cut?"generator":"analyzer";
    paintNav(target);
  }
  function observeAds(){
    document.querySelectorAll(".ad-slot").forEach(host=>{
      const check=()=>{if(host.querySelector("iframe,img,ins,object"))host.dataset.adState="rendered";};
      const observer=new MutationObserver(check);observer.observe(host,{childList:true,subtree:true});check();setTimeout(()=>observer.disconnect(),25000);
    });
    const native=$("nativeAdWrapper");let previous=0;
    new ResizeObserver(()=>{const height=Math.ceil(native.getBoundingClientRect().height);if(height>=180&&height<=1200&&Math.abs(height-previous)>1){previous=height;send({type:"nativeHeight",height});}}).observe(native);
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
    if(["#analyzer","#generator","#comparator"].includes(location.hash))navigate(location.hash.slice(1),false);

    new ResizeObserver(()=>requestAnimationFrame(updateNav)).observe(document.querySelector('.nav-links'));
    window.addEventListener('hashchange',()=>{const target=location.hash.slice(1);if(['analyzer','generator','comparator','guide','about','learningHub','learningLab','contact','pro'].includes(target))navigate(target,false);});
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

/* V10 experience: no analytics, no accounts, no secret fields or persistence here. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id),reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const COPY={
 es:{navMore:'Más secciones',moreCompare:'Comparar claves de prueba',moreLearn:'Reto y hábitos',moreGlossary:'Glosario de seguridad',moreFaq:'Preguntas frecuentes',moreAbout:'Sobre nosotros',morePro:'El futuro de Securex',where:'ESTÁS EN',atAnalyze:'ANALIZAR',atGenerate:'GENERAR',atLearn:'APRENDER',labKicker:'APRENDER HACIENDO',labTitle:'Pequeños hábitos. Más control.',labDesc:'Cinco preguntas y un plan sencillo para cuidar tus cuentas. Sin registro, sin puntuaciones públicas.',quizLabel:'RETO DE SEGURIDAD',quizCheck:'Comprobar',quizNext:'Siguiente',quizRestart:'Volver a empezar',quizFinish:'Ver resultado',quizCorrect:'Correcto.',quizWrong:'Esta vez no.',quizPick:'Elige una respuesta para continuar.',quizDone:'Reto completado',quizResult:'Has acertado {n} de 5 preguntas.',quizEnd:'Lo importante es entender las respuestas, no alcanzar una clasificación.',habitTitle:'Tu plan para esta semana',habitDesc:'Marca lo que ya has hecho. La lista solo se mantiene durante esta visita.',habit1:'Una contraseña diferente para cada cuenta.',habit2:'Guardar las claves en un gestor.',habit3:'Activar el segundo factor donde se pueda.',habit4:'Revisar cómo recuperar mis cuentas.',habitStatus:'{n} de 4 hábitos revisados',habitReset:'Restablecer lista',searchLabel:'Buscar en las guías',searchPlaceholder:'Busca: palabras, gestor, tiempo…',searchEmpty:'No hay guías que coincidan. Prueba otra palabra.',aboutTitle:'Seguridad que se entiende.',aboutDesc:'Password Securex acerca la seguridad de las contraseñas a las personas. Una herramienta para practicar, generar y aprender, sin alarmismo ni promesas imposibles.',aboutMission:'Para tu vida digital',aboutMissionText:'Explicaciones claras para tomar mejores decisiones con el correo, las redes, el Wi-Fi y tus cuentas cotidianas.',aboutMethod:'Límites a la vista',aboutMethodText:'Los resultados son orientativos. No comprobamos filtraciones, reutilización, la seguridad del servicio ni la de tu dispositivo.',contactTitle:'Hablemos de Securex',contactText:'El canal de contacto está pendiente de activar. No introduzcas contraseñas ni datos sensibles en solicitudes de soporte.',contactPending:'CONTACTO · PRÓXIMAMENTE',contactActive:'Abrir canal de contacto →',proLabel:'HOJA DE RUTA · SIN COBROS',proTitle:'Lo esencial, gratis. Lo siguiente, con sentido.',proIntro:'La base gratuita no desaparece. Estos planes son una propuesta de futuro, no una suscripción disponible.',planFree:'Disponible ahora',planFreeTitle:'Securex Free',planFreeText:'Analizador, generador, comparación educativa, reto y guías.',planPro:'En preparación',planProTitle:'Securex Pro',planProText:'Opciones que valorar para el futuro: experiencia sin anuncios, preferencias sincronizadas e informes ampliados. Sin precios ni pagos activados.',proNote:'Las cuentas, los pagos y cualquier sincronización necesitan un servicio seguro adicional. Aquí no se simula un inicio de sesión ni una compra.',ctaTitle:'Tu siguiente contraseña merece un buen comienzo.',ctaText:'Genera una clave independiente o vuelve al análisis con un ejemplo ficticio. Una herramienta útil, sin complicaciones.',ctaAnalyze:'VOLVER AL ANALIZADOR',ctaGenerate:'CREAR UNA CLAVE',top:'Volver arriba',glossaryCard:'Ciberseguridad sin palabras difíciles',glossaryDesc:'Hash, phishing, MFA y passphrase: un glosario práctico para entender las guías.',glossaryRead:'Explorar el glosario →',reading:'min de lectura',guideLang:'GUÍAS EN ESPAÑOL',checkNoGuarantee:'Completar esta lista no certifica la seguridad de tus cuentas.'},
 en:{navMore:'More sections',moreCompare:'Compare test passwords',moreLearn:'Quiz and habits',moreGlossary:'Security glossary',moreFaq:'Frequently asked questions',moreAbout:'About us',morePro:'The future of Securex',where:'YOU ARE IN',atAnalyze:'ANALYZE',atGenerate:'GENERATE',atLearn:'LEARN',labKicker:'LEARN BY DOING',labTitle:'Small habits. More control.',labDesc:'Five questions and a simple plan to look after your accounts. No signup or public scores.',quizLabel:'SECURITY QUIZ',quizCheck:'Check answer',quizNext:'Next',quizRestart:'Start again',quizFinish:'See result',quizCorrect:'Correct.',quizWrong:'Not this time.',quizPick:'Choose an answer to continue.',quizDone:'Quiz completed',quizResult:'You answered {n} of 5 questions correctly.',quizEnd:'Understanding the answers matters more than a ranking.',habitTitle:'Your plan for this week',habitDesc:'Tick what you have done. The list only lasts for this visit.',habit1:'A different password for every account.',habit2:'Store passwords in a manager.',habit3:'Enable a second factor where possible.',habit4:'Review how to recover my accounts.',habitStatus:'{n} of 4 habits reviewed',habitReset:'Reset checklist',searchLabel:'Search the guides',searchPlaceholder:'Search: palabras, gestor, tiempo…',searchEmpty:'No matching guides. Try a different word.',aboutTitle:'Security you can understand.',aboutDesc:'Password Securex brings password security to individuals. A tool to practice, generate and learn, without scaremongering or impossible promises.',aboutMission:'For your digital life',aboutMissionText:'Clear explanations for better decisions about email, social networks, Wi-Fi and everyday accounts.',aboutMethod:'Limits in plain sight',aboutMethodText:'Results are illustrative. We do not check breaches, reuse or the security of your service or device.',contactTitle:'Let’s talk about Securex',contactText:'The contact channel has not been activated yet. Do not include passwords or sensitive data in support requests.',contactPending:'CONTACT · COMING LATER',contactActive:'Open contact channel →',proLabel:'ROADMAP · NO PAYMENTS',proTitle:'Useful for free. More, with purpose.',proIntro:'The free foundation stays. These plans describe a possible future, not an available subscription.',planFree:'Available now',planFreeTitle:'Securex Free',planFreeText:'Analyzer, generator, educational comparison, quiz and guides.',planPro:'In planning',planProTitle:'Securex Pro',planProText:'Ideas for the future: an ad-free experience, synced preferences and expanded reports. No pricing or payments enabled.',proNote:'Accounts, payments and synchronization require an additional secure service. This page does not simulate login or checkout.',ctaTitle:'Give your next password a better start.',ctaText:'Generate an independent password or return to the analyzer with a test example. A useful tool, without complications.',ctaAnalyze:'BACK TO ANALYZER',ctaGenerate:'CREATE A PASSWORD',top:'Back to top',glossaryCard:'Security without difficult words',glossaryDesc:'Hash, phishing, MFA and passphrase: a practical glossary to understand the guides (in Spanish).',glossaryRead:'Explore the glossary →',reading:'min read',guideLang:'GUIDES IN SPANISH',checkNoGuarantee:'Completing this checklist does not certify account security.'}
 };
 const bank={es:[
 ['¿Qué cambio suele aportar más que sustituir «a» por «@»?',['Repetir la misma palabra.','Generar una clave más larga y aleatoria.','Añadir siempre el año actual.'],1,'Las sustituciones y las fechas pueden conservar patrones reconocibles. La longitud elegida al azar evita depender de esa regla previsible.'],
 ['Una web filtra una contraseña que has reutilizado. ¿Qué otras cuentas pueden quedar expuestas?',['Solo esa web.','Las cuentas que utilizan la misma contraseña.','Ninguna si tiene símbolos.'],1,'Reutilizar una clave conecta el riesgo entre servicios. Usa una distinta para cada cuenta.'],
 ['¿Qué aporta un segundo factor?',['Otra comprobación además de la contraseña.','Hace imposible cualquier ataque.','Permite reutilizar contraseñas.'],0,'El segundo factor añade una barrera, pero no elimina todos los riesgos ni convierte una clave reutilizada en una buena práctica.'],
 ['Una frase larga de una canción es…',['Siempre más segura que una clave aleatoria.','Segura solo por tener espacios.','Posiblemente predecible aunque sea larga.'],2,'Una frase conocida puede aparecer en estrategias de adivinación. Las palabras seleccionadas de manera independiente y al azar son otra construcción.'],
 ['Securex muestra una puntuación alta. ¿Qué sabemos?',['Que nunca se ha filtrado.','Que su estructura obtiene buena valoración dentro del modelo.','Que el servicio no puede ser atacado.'],1,'La puntuación es orientativa. No comprueba filtraciones, reutilización, phishing ni el almacenamiento de la contraseña en un servicio.']
 ],en:[
 ['Which change helps more than replacing “a” with “@”?',['Repeating the same word.','Generating a longer random password.','Always adding the current year.'],1,'Substitutions and dates can preserve recognizable patterns. Random length avoids relying on a predictable personal rule.'],
 ['A website leaks a password you have reused. Which other accounts could be exposed?',['Only that website.','Accounts using the same password.','None if it has symbols.'],1,'Reusing a password connects risk across services. Use a different one for each account.'],
 ['What does a second factor add?',['Another check in addition to the password.','It makes every attack impossible.','It allows you to reuse passwords.'],0,'A second factor adds a barrier but does not remove every risk or make reused passwords a good practice.'],
 ['A long phrase from a song is…',['Always safer than a random password.','Safe just because it has spaces.','Potentially predictable despite being long.'],2,'A known phrase can be included in guessing strategies. Independently and randomly selected words are a different construction.'],
 ['Securex shows a high score. What does that tell us?',['It has never been breached.','Its structure is rated well within this model.','The service cannot be attacked.'],1,'The score is illustrative. It does not check breaches, reuse, phishing or password storage on a service.']
 ]};
 let lang=document.documentElement.lang==='en'?'en':'es',q=0,answered=false,finished=false,answers=[],selection=null;
 const tr=(key,values={})=>(COPY[lang][key]||key).replace(/\{(\w+)\}/g,(_,k)=>String(values[k]??''));
 const clean=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 function habits(){const n=document.querySelectorAll('[data-habit]:checked').length;if($('habitStatus'))$('habitStatus').textContent=tr('habitStatus',{n});}
 function renderQuiz(){
  if(!$('quizBody'))return;
  $('quizBody').hidden=finished;$('quizSummary').hidden=!finished;
  if(finished){
   $('quizSummary').replaceChildren();
   const h=document.createElement('h3');h.textContent=tr('quizDone');
   const score=document.createElement('p');score.className='quiz-result-score';score.textContent=answers.filter(Boolean).length+' / 5';
   const text=document.createElement('p');text.className='v10-intro';text.textContent=tr('quizResult',{n:answers.filter(Boolean).length})+' '+tr('quizEnd');
   const review=document.createElement('ol');review.className='quiz-review';bank[lang].forEach(item=>{const li=document.createElement('li');li.textContent=item[3];review.append(li);});
   const reset=document.createElement('button');reset.className='ghost-button';reset.type='button';reset.textContent=tr('quizRestart');reset.addEventListener('click',resetQuiz);
   $('quizSummary').append(h,score,text,review,reset);return;
  }
  const item=bank[lang][q];$('quizCounter').textContent=(q+1)+' / 5';$('quizQuestion').textContent=item[0];
  $('quizProgress').replaceChildren(...bank[lang].map((_,i)=>{const dot=document.createElement('i');dot.className=i<=q?'done':'';return dot;}));
  $('quizOptions').replaceChildren();
  item[1].forEach((text,i)=>{
   const label=document.createElement('label');label.className='quiz-option';
   const radio=document.createElement('input');radio.type='radio';radio.name='quizAnswer';radio.value=String(i);radio.checked=selection===i;radio.disabled=answered;
   radio.addEventListener('change',()=>{selection=i;$('quizFeedback').textContent='';});
   const span=document.createElement('span');span.textContent=text;
   if(answered){if(i===item[2])label.classList.add('is-correct');else if(selection===i)label.classList.add('is-wrong');}
   label.append(radio,span);$('quizOptions').append(label);
  });
  $('quizCheck').textContent=tr(answered?(q===4?'quizFinish':'quizNext'):'quizCheck');
  $('quizFeedback').textContent=answered?tr(answers[q]?'quizCorrect':'quizWrong')+' '+item[3]:'';
  $('quizFeedback').dataset.status=answered?(answers[q]?'correct':'wrong'):'';
 }
 function resetQuiz(){q=0;answered=false;finished=false;answers=[];selection=null;renderQuiz();$('quizQuestion')?.focus({preventScroll:true});}
 $('quizCheck')?.addEventListener('click',()=>{
  if(!answered){if(selection===null){$('quizFeedback').textContent=tr('quizPick');return;}answers[q]=selection===bank[lang][q][2];answered=true;renderQuiz();$('quizCheck').focus({preventScroll:true});}
  else if(q===4){finished=true;renderQuiz();$('quizSummary').focus({preventScroll:true});}
  else{q++;answered=false;selection=null;renderQuiz();$('quizQuestion').focus({preventScroll:true});}
 });
 $('quizRestart')?.addEventListener('click',resetQuiz);
 document.querySelectorAll('[data-habit]').forEach(el=>el.addEventListener('change',habits));
 $('habitReset')?.addEventListener('click',()=>{document.querySelectorAll('[data-habit]').forEach(el=>el.checked=false);habits();});
 const search=$('guideSearch');
 function filterGuides(){if(!search)return;const term=clean(search.value.trim());let count=0;document.querySelectorAll('.seo-guide-card').forEach(card=>{const show=clean(card.textContent).includes(term);card.hidden=!show;if(show)count++;});$('guideEmpty').hidden=count>0;}
 search?.addEventListener('input',filterGuides);
 function closeMore(){const menu=$('navDrawer'),button=$('navMore');if(menu)menu.hidden=true;button?.setAttribute('aria-expanded','false');}
 $('navMore')?.addEventListener('click',()=>{const opening=$('navDrawer').hidden;$('navDrawer').hidden=!opening;$('navMore').setAttribute('aria-expanded',String(opening));});
 document.addEventListener('click',event=>{if(!event.target.closest('.nav-more'))closeMore();});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('navDrawer')&&!$('navDrawer').hidden){event.preventDefault();event.stopImmediatePropagation();closeMore();$('navMore').focus();}},true);
 $('navDrawer')?.addEventListener('click',event=>{if(event.target.closest('a'))closeMore();});
 // Normal links stay normal links: no aria menu/tab roles or keyboard traps.
 const settings=window.SecurexSiteSettings||{},contact=$('contactAction');
 if(contact){
  let target='';
  if(typeof settings.contactEmail==='string'&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(settings.contactEmail))target='mailto:'+settings.contactEmail;
  if(typeof settings.contactUrl==='string'&&/^https:\/\//.test(settings.contactUrl))target=settings.contactUrl;
  if(target){contact.href=target;contact.hidden=false;$('contactPending').hidden=true;$('contactText').hidden=true;}
 }
 function applyLanguage(){
  lang=document.documentElement.lang==='en'?'en':'es';
  document.querySelectorAll('[data-v10]').forEach(el=>el.textContent=tr(el.dataset.v10));
  $('navMore')?.setAttribute('aria-label',tr('navMore'));$('backTop')?.setAttribute('aria-label',tr('top'));
  if(search){search.placeholder=tr('searchPlaceholder');search.setAttribute('aria-label',tr('searchLabel'));}
  renderQuiz();habits();filterGuides();
 }
 new MutationObserver(applyLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 let scrollFrame=0;
 function updateTop(){scrollFrame=0;if($('backTop'))$('backTop').hidden=scrollY<innerHeight*1.5;}
 addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateTop);},{passive:true});
 $('backTop')?.addEventListener('click',()=>{scrollTo({top:0,behavior:reduced.matches?'auto':'smooth'});});
 applyLanguage();updateTop();
})();

SecurexHost.start();
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelectorAll('#guide details').forEach(details=>{
   const summary=details.querySelector('summary'),panel=details.querySelector('p');if(!summary||!panel)return;
   let animation=null,desired=details.open,seq=0;
   summary.addEventListener('click',event=>{
     event.preventDefault();const was=details.open;desired=animation?!desired:!was;const ticket=++seq;
     const height=was?panel.getBoundingClientRect().height:0;
     const opacity=was?getComputedStyle(panel).opacity:'0';
     if(animation){animation.cancel();animation=null;}
     if(reduced.matches||!panel.animate){details.open=desired;return;}
     details.open=true;
     const target=desired?panel.getBoundingClientRect().height:0;
     animation=panel.animate([{height:height+'px',opacity},{height:target+'px',opacity:desired?1:0}],{duration:desired?300:230,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'});
     animation.onfinish=()=>{if(ticket!==seq)return;details.open=desired;const done=animation;animation=null;done.cancel();};
   });
 });
})();

(()=>{
 const text={es:{lab:"TU ESPACIO DE SEGURIDAD",status:"SIN REGISTRO",adtitle:"Tú eliges la publicidad",addesc:"Los banners son opcionales. Al aceptarlos, terceros pueden tratar datos de navegación. El analizador funciona también sin anuncios.",accept:"Aceptar banners",reject:"Sin publicidad",reload:"Aplicar recarga la página y vacía los campos. No hay ventanas ni notificaciones publicitarias.",saved:"Preferencia guardada. Puedes cambiarla desde el pie de página.",demo:"Espacio reservado para publicidad. Versión de demostración."},en:{lab:"YOUR SECURITY WORKSPACE",status:"NO ACCOUNT",adtitle:"You choose the advertising",addesc:"Banners are optional. If you accept them, third parties may process browsing data. The tool works without advertising too.",accept:"Accept banners",reject:"No advertising",reload:"Applying reloads this page and clears its fields. No advertising windows or notifications.",saved:"Preference saved. You can change it from the footer.",demo:"Reserved advertising space. Demonstration version."}};
 const apply=()=>{const d=text[document.documentElement.lang==='en'?'en':'es'];document.querySelectorAll('[data-v11]').forEach(e=>{if(d[e.dataset.v11])e.textContent=d[e.dataset.v11];});};
 new MutationObserver(apply).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});apply();
})();
