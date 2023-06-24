import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";

const Analytics = lazy(() => import("../pages/Analytics"));
const Calendar = lazy(() => import("../pages/Calendar"));
const EmployeesBase = lazy(() => import("../pages/EmployeesBase"));
const GeneralEmployeesBase = lazy(() => import("../pages/GeneralEmployeesBase"));
const Graphs = lazy(() => import("../pages/Graphs"));
const Questionnaires = lazy(() => import("../pages/Questionnaires"));
const Settings = lazy(() => import("../pages/Settings"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "analytics", element: <Analytics /> }],
  },
]);

export const RoutesProvider = () => {
  return <RouterProvider router={routes} />;
};
