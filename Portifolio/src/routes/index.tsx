import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "src/shared/layout";
import { ApiGitHub, Particle, Playground, Home } from "src/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/apigithub" element={<ApiGitHub login="MaykonFelix" />} />
      <Route path="/particle" element={<Particle />} />
      <Route path="/playground" element={<Playground />} />
    </Route>
  )
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
