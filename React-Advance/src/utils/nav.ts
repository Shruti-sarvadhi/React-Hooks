interface Route {
  path: string;
  name: string;
}

export const publicRoutes: Route[] = [
  { path: "/", name: "Home" },
  { path: "/user-form", name: "User Form" },
  { path: "/user-form-formik", name: "Formik Form" },
];
