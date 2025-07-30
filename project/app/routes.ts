// Importa 'route' junto con 'index'
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Esta es tu ruta de inicio ('/')

  // Añade esta línea para tu nueva ruta
  route("issued", "routes/issued.tsx"),
  route("issued/:id","routes/services.tsx"),
] satisfies RouteConfig;