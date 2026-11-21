# Publicación de Articula en iPhone · Guía operativa

## A. Publicar frontend en GitHub Pages

1. Crea un repositorio de GitHub, por ejemplo `articula` (privado si tu plan permite Pages privado; de lo contrario, un repositorio público implica que el código fuente será visible). No añadas secretos al repositorio.
2. Extrae el ZIP **antes** de subirlo. Sube el contenido de `Articula_1.0/` a la raíz del repositorio, incluyendo `.github/workflows/pages.yml`. No debe quedar `Articula_1.0/index.html` dentro de una subcarpeta adicional.
3. En GitHub, abre `Settings → Pages → Build and deployment → Source: GitHub Actions`.
4. Haz un `push` a la rama `main`. En `Actions`, espera que el workflow **Publicar Articula en GitHub Pages** termine satisfactoriamente.
5. La URL normalmente será `https://TU_USUARIO.github.io/articula/`. Esta dirección es un ejemplo: usa la dirección real mostrada por GitHub Pages.
6. En el iPhone abre esa dirección en Safari. Pulsa Compartir → Añadir a pantalla de inicio → Añadir. Abre Articula desde el icono.
7. Permite el micrófono la primera vez que inicies una grabación.

### Si usas terminal con Git

```bash
git init
git add .
git commit -m "Articula 1.0 · iPhone PWA"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/articula.git
git push -u origin main
```

El repositorio remoto debe existir y el usuario debe autenticarse previamente. **No ejecutes `git init` dentro de un repositorio existente que no quieras reemplazar.**

## B. Desplegar backend IA con Cloudflare Workers

**Requisitos:** Node.js, cuenta Cloudflare, clave OpenAI API con facturación, repositorio GitHub ya publicado por HTTPS.

Desde la carpeta `backend`:

```bash
cd backend
npm install
npx wrangler login
```

Edita `wrangler.toml` y reemplaza:

```toml
ALLOWED_ORIGIN = "https://TU_USUARIO.github.io"
```

**Importante:** escribe solo el origen, sin `/articula`. Si pruebas el frontend local, puedes añadir `http://localhost:8000` separado por coma al origen permitido durante desarrollo; no dejes orígenes innecesarios activos en producción.

Guarda los secretos (en el terminal, no en el repo):

```bash
npx wrangler secret put OPENAI_API_KEY
npx wrangler secret put ACCESS_TOKEN
```

Para `ACCESS_TOKEN`, genera un valor aleatorio largo, por ejemplo:

```bash
python3 -c "import secrets; print(secrets.token_urlsafe(36))"
```

Copia el resultado en un gestor de contraseñas y proporciona ese valor al comando `secret put ACCESS_TOKEN`. No incluyas el token en documentación, capturas ni URL.

Despliega:

```bash
npx wrangler deploy
```

Anota la URL HTTPS que devuelve Cloudflare, por ejemplo `https://articula-ai-gateway.TU_SUBDOMINIO.workers.dev`.

## C. Conectar la app al entrenador

1. Abre Articula → Ajustes.
2. Pega la URL completa HTTPS del Worker en **URL del servidor**.
3. Escribe el token `ACCESS_TOKEN` en **Token de acceso personal** (nunca la clave de OpenAI).
4. Pulsa **Guardar conexión** y después **Probar conexión**.
5. Realiza una grabación, abre Biblioteca, selecciónala y pulsa **Analizar con IA**.
6. Confirma que aparecen transcripción, observaciones, rúbricas y el campo **Pregunta al entrenador**.

Las solicitudes solo se realizan cuando pulsas los botones correspondientes. Cloudflare Worker no tiene almacenamiento de audios; el audio y la transcripción se transmiten al proveedor de IA al ser analizados.

## D. Validación real en iPhone antes de anunciar el producto

- Probar Safari y modo «Añadir a pantalla de inicio» en un iPhone real.
- Conceder, rechazar y volver a conceder permisos de micrófono.
- Grabar y reproducir audios cortos y de 2 minutos.
- Cerrar y reabrir la PWA; comprobar persistencia en Biblioteca.
- Probar importación de `.m4a`, `.webm`, `.mp3` y transcripción.
- Probar 401 (token incorrecto), falta de red y error del proveedor IA.
- Probar con VoiceOver, texto grande, orientación y modo de ahorro.
- Confirmar costos, cuotas y límites del backend; habilitar alertas de gasto.
- Verificar la política de privacidad, el tratamiento de audios y consentimiento de quienes se graben.

### Para acceso público o multiusuario

El token compartido es válido solo para un prototipo de uso personal. Antes de dar acceso a terceros, migrar a autenticación individual, cuotas por usuario, rate limiting, prevención de abuso, telemetría privada, política de privacidad completa, consentimiento y gestión de datos en backend. La protección CORS **no** sustituye la autenticación.
