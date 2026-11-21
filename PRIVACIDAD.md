# Articula · Diseño de privacidad (versión personal)

- **Almacenamiento por defecto:** la app guarda los audios, transcripciones y análisis en IndexedDB del navegador local. Perfil, preferencias, configuración del backend y días completados se guardan en localStorage.
- **Token:** se guarda en sessionStorage del navegador y no se exporta en el JSON de historial.
- **Transmisión voluntaria:** solo al solicitar un análisis, el audio o texto se envía al Cloudflare Worker configurado, que lo remite a un proveedor de IA para transcribirlo y evaluarlo. Al preguntar al entrenador se envían la pregunta, transcripción y evaluación previa. Consultar las políticas de datos de Cloudflare y del proveedor de IA antes de utilizarlo con contenido sensible.
- **Eliminación:** puedes eliminar cada grabación o todos los datos desde Ajustes. Borrar datos de Safari también puede eliminarlos; no existe respaldo en nube automático.
- **Exportación:** exportación de metadatos, transcripciones y evaluaciones en JSON; audios descargables individualmente. El JSON no contiene archivos de audio.
- **Advertencia:** no grabes otras personas sin autorización. Evita introducir información confidencial de trabajo, clientes o estudiantes en un proveedor de IA si no existe autorización.
- **Alcance:** estas son características de ingeniería del prototipo, **no** una política legal definitiva ni condiciones de un servicio comercial multiusuario.
