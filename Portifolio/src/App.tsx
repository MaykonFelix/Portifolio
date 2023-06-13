import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


import { AppRoute } from "./routes/root";
import { ApiGitHub, Particle, Playground } from "src/pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppRoute />} />
      <Route path="/apigithub" element={<ApiGitHub login="MaykonFelix" />} />
      <Route path="/particle" element={<Particle />} />
      <Route path="/playground" element={<Playground />} />
    </>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
