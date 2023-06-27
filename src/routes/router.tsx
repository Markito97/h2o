import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";

const Analytics = lazy(() => import("../pages/Analytics"));
const Calendar = lazy(() => import("../pages/Calendar"));
const EmployeesBase = lazy(() => import("../pages/EmployeesBase"));
const GeneralEmployeesBase = lazy(() => import("../pages/GeneralEmployeesBase"));
const Graphs = lazy(() => import("../pages/Graphs"));
const Questionnaires = lazy(() => import("../pages/Questionnaires"));
const Settings = lazy(() => import("../pages/Settings"));
const Main = lazy(() => import("../pages/Main"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "analytics", element: <Analytics /> },
      {
        path: "general_employees_base",
        element: <GeneralEmployeesBase />,
      },
      { path: "questionnaires", element: <Questionnaires /> },
      { path: "employees_base", element: <EmployeesBase /> },
      { path: "calendar", element: <Calendar /> },
      { path: "graphs", element: <Graphs /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

export const RoutesProvider = () => {
  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};
