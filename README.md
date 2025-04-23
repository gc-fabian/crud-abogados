# CRUD Abogados con Next.js y MongoDB

## Descripción
Esta app permite **Crear**, **Leer**, **Actualizar** y **Eliminar** abogados, usando Next.js (Pages Router) y MongoDB con Mongoose.

## Tecnologías
- Next.js (React)
- MongoDB Atlas + Mongoose
- SWR para fetch en cliente

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/crud-abogados.git
   cd crud-abogados
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en `.env.local`:
   ```ini
   MONGODB_URI="TU_CADENA_DE_CONEXIÓN_A_MONGODB"
   ```

4. Levanta la app en desarrollo:
   ```bash
   npm run dev
   ```

5. Abre en tu navegador:
   ```
   http://localhost:3000/abogados
   ```

## Despliegue en Vercel

1. Sube tu repo a GitHub.
2. Entra a [https://vercel.com](https://vercel.com) y crea un nuevo proyecto importando tu repo.
3. En "Settings" → "Environment Variables", añade:
   - **Key:** `MONGODB_URI`
   - **Value:** tu cadena de MongoDB Atlas
4. Despliega. ¡Listo!

## Qué aprendí / Retos
- Configurar Mongoose en Next.js con conexión caché para no re-conectar en cada petición.
- Manejar rutas API en Next.js (Controllers).
- Usar SWR para datos en cliente con React.
- Flujo completo de despliegue en Vercel y gestión de variables de entorno.
