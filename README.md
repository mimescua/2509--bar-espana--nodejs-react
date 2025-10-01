# 2509--bar-espana--nodejs-react

Evaluación técnica de frontend en Node.js/React para una empresa de soluciones informáticas

## Bar España Frontend (React + Vite + TailwindCSS)

Aplicación frontend construida con React, Vite y TailwindCSS. Consume una API para productos, categorías e imágenes. Incluye alias de importación y configuración con variables de entorno vía Vite.

### Requisitos previos

- **Node.js**: v18+ recomendado
- **Gestor de paquetes**: pnpm (recomendado) o npm/yarn

### Clonar el proyecto

```bash
git clone <URL_DE_TU_REPOSITORIO>
cd 2509--bar-espana--nodejs-react
```

Si ya tienes el código en tu equipo, simplemente navega al directorio del proyecto.

### Instalar dependencias

- Con pnpm (recomendado):

```bash
pnpm install
```

- Con npm:

```bash
npm install
```

- Con yarn:

```bash
yarn install
```

### Configuración

La aplicación utiliza variables de entorno proporcionadas por Vite en tiempo de compilación/ejecución del dev server. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables (todas obligatorias; la app fallará si falta alguna):

```env
# .env.local
VITE_API_URL="https://tu.api/base/url"
VITE_IMG_API_URL="https://tu.api.imagenes/base/url"
VITE_ADMIN_CODE="tu-codigo-admin"
```

- `VITE_API_URL`: URL base de la API consumida por el frontend
- `VITE_IMG_API_URL`: URL base para la carga/servido de imágenes
- `VITE_ADMIN_CODE`: Código de administración utilizado por la interfaz

### Ejecutar la app (desarrollo)

Inicia el servidor de desarrollo de Vite.

```bash
pnpm dev
# o con npm
npm run dev
# o con yarn
yarn dev
```

Luego abre `http://localhost:5173` en el navegador (puerto por defecto de Vite).

### Construir para producción

Genera el build optimizado en `dist/`.

```bash
pnpm build
# o con npm
npm run build
# o con yarn
yarn build
```

### Previsualizar el build de producción

Sirve el build localmente para verificación.

```bash
pnpm preview
# o con npm
npm run preview
# o con yarn
yarn preview
```

### Linting y formato

- Lint: `pnpm lint` (o `npm run lint`, `yarn lint`)
- Formato: `pnpm prettier` (o `npm run prettier`, `yarn prettier`)

### Notas y solución de problemas

- Si la app muestra errores como `VITE_API_URL is required`, revisa que `.env.local` contenga todas las variables y reinicia el servidor de desarrollo.
- Verifica que tu versión de Node sea ≥ 18.
- Alias de importación configurados en `vite.config.ts`: `@`, `@assets`, `@components`, `@context`, `@hooks`, `@routes`, `@services`, `@styles`, `@utils`.
