import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "src/shared/layout";
import { Particle, Playground, Home, FramerMotion } from "src/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/particle" element={<Particle />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/framerMotion" element={<FramerMotion />} />
    </Route>
  )
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
