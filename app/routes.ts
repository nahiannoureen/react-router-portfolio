import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayout.jsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("projects", "./routes/projects.tsx"),
  ]),
] satisfies RouteConfig;
