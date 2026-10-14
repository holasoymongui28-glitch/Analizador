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
