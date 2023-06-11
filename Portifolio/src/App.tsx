import { AppRoute } from "./routes/root";
import { ApiGitHub, Particle } from "src/pages";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppRoute />} />
      <Route path="/apigithub" element={<ApiGitHub login="MaykonFelix" />} />
      <Route path="/particle" element={<Particle />} />
    </>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
