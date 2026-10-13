PASSWORD SECUREX — VERSIÓN 3.0
=======================================

INSTALACIÓN EN GITHUB PAGES
1. Sube index.html, manifest.webmanifest y sw.js a la raíz del repositorio.
2. Sube icons/securex-192.png y icons/securex-512.png manteniendo la carpeta icons.
3. Activa GitHub Pages con la rama y carpeta adecuadas.
4. Comprueba ambos modos: web normal (con Adsterra) y ?private=1 (sin Adsterra).

CARACTERÍSTICAS
- Lluvia decorativa en canvas, limitado a 10 FPS, con pausa al ocultar la pestaña.
- Spotlight del cursor sin bucle de animación continuo.
- Botón ADS: BLANCO / ADS: NEGRO que cambia el fondo de las zonas de anuncios.
  NOTA: No modifica la creatividad que Adsterra pueda mostrar dentro de un iframe.
- MODO PRIVADO abre una nueva página con ?private=1 y evita cargar anuncios externos.
- Escáner de entropía local heurístico, mejor detección de patrones.
- Generador de contraseñas seguras y frases de 6-10 palabras del diccionario local de 512.
- Modo ES/EN, guía de contraseñas y PWA instalada en HTTPS cuando se suben todos los archivos.

ADVERTENCIAS
- En modo normal los scripts publicitarios directos están en la misma página que el formulario
  y pueden leer su contenido. Recomienda MODO PRIVADO para contraseñas reales.
- Los scripts de terceros pueden provocar popups o redirecciones por su cuenta: la página no
  incorpora scripts Popunder intencionados, pero no puede controlar cada creatividad.
- Siguen presentes claves de Adsterra duplicadas (ambos laterales y ambos banners 728x90).
  Es aconsejable crear en Adsterra identificadores independientes para cada posición.
- No se comprobó la entrega real de anuncios de Adsterra: la interfaz se validó con anuncios simulados.
- La entropía de contraseñas introducidas manualmente es una estimación heurística; no es
  una demostración de aleatoriedad y los tiempos de ataque no son predicciones.

Si solo subes index.html, el escáner y el generador funcionan, pero la instalación offline
PWA necesitará también manifest.webmanifest, sw.js y los iconos.
