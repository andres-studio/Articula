# Articula — Tu entrenador personal de comunicación

**Versión:** 1.0 · **Idiomas:** español e inglés · **Formato:** PWA para iPhone y escritorio

Articula es una aplicación privada de entrenamiento de expresión oral. Permite grabar audio desde el iPhone, mantener una biblioteca local, completar diagnósticos separados en español e inglés, seguir un programa de siete días y recibir feedback de un entrenador de IA sobre las grabaciones guardadas. Su diseño no requiere React, Node.js ni instalación de dependencias en el frontend.

## Funciona directamente (sin conectar IA)

- Onboarding y elección de objetivos y escenarios.
- Programa bilingüe de siete sesiones con cinco ejercicios y temporizador de 10 minutos.
- Captura de micrófono con MediaRecorder, reproducción y descarga.
- Biblioteca privada en IndexedDB; importación de audios, edición manual de transcripciones y eliminación individual.
- Métricas descriptivas a partir del texto (palabras, palabras/minuto, posibles muletillas).
- Gráficas de progreso basadas en datos reales, comparación por idioma, exportación JSON.
- Diseño responsive con navegación iPhone, iconos originales, animaciones y PWA offline básica.

## Requiere configurar el backend de IA

- Transcripción de archivos de audio con `gpt-transcribe`.
- Evaluación estructurada de claridad de ideas, improvisación, argumentación y concisión.
- Feedback específico y una acción de mejora por grabación.
- Consultas posteriores al entrenador usando la transcripción y evaluación guardada.
- Ajuste del foco de entrenamiento cuando ya existen evaluaciones IA.

El agente **no** promete evaluar dicción acústica, tono, pausas ni pronunciación a partir de una mera transcripción. Esa dimensión queda explícitamente sin puntuación. No realiza diagnósticos clínicos.

## Estructura

```text
Articula_1.0/
├── index.html             App lista para GitHub Pages
├── styles.css             Sistema visual responsive
├── app.js                 Navegación, grabación, coaching y análisis
├── content.js             Diagnóstico y primera semana bilingüe
├── db.js                  Almacenamiento de audio IndexedDB
├── sw.js                  Service Worker offline
├── manifest.webmanifest   Instalación iPhone
├── assets/                Identidad de marca e iconos
├── backend/
│   ├── worker.js          Proxy privado a la IA, sin almacenar audios
│   ├── wrangler.toml      Configuración Cloudflare Workers
│   └── package.json       Scripts de despliegue del backend
├── .github/workflows/pages.yml
├── tests/backend.test.mjs
├── PUBLICAR.md
├── PRIVACIDAD.md
└── INFORME_PRUEBAS.md
```

## Probar en computador

```bash
cd Articula_1.0
python3 -m http.server 8000
```

Abrir `http://localhost:8000` en Safari o Chrome. No abrir el archivo `index.html` directamente como `file://`: micrófono e IndexedDB pueden requerir contexto seguro. Para probar el micrófono desde iPhone, **publicar por HTTPS**. Abrir la dirección HTTP de tu computador por Wi-Fi no garantiza acceso al micrófono.

## Publicar en GitHub Pages

Ver instrucciones completas en [`PUBLICAR.md`](PUBLICAR.md). El workflow ya está preparado para desplegar automáticamente los archivos estáticos al hacer `push` a `main`.

## Activar el experto de IA

Se utiliza un Cloudflare Worker como backend de seguridad con autenticación por token. Requiere una cuenta de Cloudflare y una clave de API de OpenAI con facturación habilitada. **Nunca insertar una clave de OpenAI en el frontend ni subirla a GitHub.**

En Articula → Ajustes → Conectar entrenador experto, configurar:

- La URL HTTPS del Worker.
- El token privado `ACCESS_TOKEN` generado al desplegar el Worker.

El token se guarda en `sessionStorage` y se pierde al cerrar la sesión del navegador. La dirección del Worker permanece en `localStorage`. Conectar el backend genera costos por uso; configurar presupuestos y protección adicional antes de compartir con terceros.

## Limitaciones conocidas

1. Las grabaciones de IndexedDB están **en un navegador/dispositivo**, no se sincronizan. Borrar datos de Safari o cambiar de iPhone puede eliminar el historial. Exportar audios individualmente y el historial JSON regularmente.
2. iOS puede detener o suspender la captura cuando se bloquea la pantalla, se cambia de app o durante interrupciones telefónicas. Practicar con Articula abierta.
3. El servicio offline permite abrir la interfaz y consultar datos ya almacenados; la IA necesita conexión.
4. El entrenamiento usa preguntas guiadas y seguimiento de texto. No incluye conversación de voz en tiempo real, avatar, análisis fonético validado ni sincronización multidispositivo.
5. El diagnóstico es formativo y se construye mediante el análisis individual de los ejercicios; no es una prueba científica estandarizada ni una calificación clínica.
6. Los tiempos son una guía y un límite total de 10 minutos por sesión, no una garantía de que cada ejercicio consuma exactamente su intervalo.
7. La publicación del código no equivale a un lanzamiento comercial: seguridad de producción, políticas de privacidad, pruebas de iOS reales y monitorización deben validarse antes de acceso masivo.

## Pruebas

```bash
cd Articula_1.0
node --test tests/backend.test.mjs
```

© 2026 Articula. Proyecto personal. Todos los derechos reservados.
