import { createBrowserRouter, createHashRouter, RouteObject } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
//import HomePage from "./pages/HomePage";
//import ReportsPage from "./pages/ReportsPage";
//import PermissionChangeRequestsPage from "./pages/PermissionChangeRequestsPage";
//import CreatePermissionChangeRequestPage from "./pages/CreatePermissionChangeRequestPage";
//import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import ServiceSelector from "./components/ServiceSelector";
import HomePage from "./pages/HomePage";
import ReportsServicePage from "./pages/ReportsServicePage";
import ReportsPage from "./pages/ReportsPage";
//import PCRPageDummy from "./pages/PCRPageDummy";
import ServiceSelectorPageDummy from "./pages/ServiceSelectorPageDummy";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const RouterBuild = () => {
  const generalRoutes: RouteObject[] = [
    // { path: "/", element: <ServiceSelectorPageDummy />,  },
    { path: "/", element: <HomePage />,  },
    { path: "/pcr-editor/create", element: <ServiceSelectorPageDummy />,  },
    { path: "/reports", element: <ReportsPage />,  },
    { path: "/reports/service-access-report", element: <ReportsServicePage />,  },
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


export const Router = createHashRouter([RouterBuild()]);

