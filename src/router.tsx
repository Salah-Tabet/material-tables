import { createBrowserRouter, RouteObject } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage";
//import ReportsPage from "./pages/ReportsPage";
//import PermissionChangeRequestsPage from "./pages/PermissionChangeRequestsPage";
//import CreatePermissionChangeRequestPage from "./pages/CreatePermissionChangeRequestPage";
//import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ServiceSelector from "./components/ServiceSelector";
import HomePage from "./pages/HomePage";
//import PCRPageDummy from "./pages/PCRPageDummy";
import ServiceSelectorPageDummy from "./pages/ServiceSelectorPageDummy";

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

const RouterBuild = () => {
  const generalRoutes: RouteObject[] = [
    // { path: "/", element: <ServiceSelectorPageDummy />,  },
    { path: "/", element: <HomePage />,  },
    { path: "/create", element: <ServiceSelector />,  },
  ];

  const routes = (
    {
        element: <AppLayout />,
        children:[
            ...generalRoutes
        ]
    }
  );

  return routes;
};


export const Router = createBrowserRouter([RouterBuild()]);

