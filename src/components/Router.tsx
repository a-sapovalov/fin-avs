import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import CorporateLoanPage from '@/components/pages/CorporateLoanPage';
import CreditLinePage from '@/components/pages/CreditLinePage';
import AboutPage from '@/components/pages/AboutPage';
import ApplicationPage from '@/components/pages/ApplicationPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "corporate-loan",
        element: <CorporateLoanPage />,
        routeMetadata: {
          pageIdentifier: 'corporate-loan',
        },
      },
      {
        path: "credit-line",
        element: <CreditLinePage />,
        routeMetadata: {
          pageIdentifier: 'credit-line',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "application",
        element: <ApplicationPage />,
        routeMetadata: {
          pageIdentifier: 'application',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
