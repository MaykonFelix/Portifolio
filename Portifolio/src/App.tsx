import { AppRoute } from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<AppRoute />} />)
);

export const App = () => {
  return <RouterProvider router={router} />;
};
