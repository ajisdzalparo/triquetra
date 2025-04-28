import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import EarlyAccess from "./components/pages/EarlyAccess";
import Demo from "./components/pages/Demo";
const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/request-early-access",
    element: <EarlyAccess />,
  },
  {
    path: "/request-demo",
    element: <Demo />,
  },
]);

// Render aplikasi dengan RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
