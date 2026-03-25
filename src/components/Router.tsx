import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import CreditLinePage from '@/components/pages/CreditLinePage';
import ContactsPage from '@/components/pages/ContactsPage';
import ApplicationPage from '@/components/pages/ApplicationPage';
import LeasesPage from '@/components/pages/LeasesPage';
import LoansPage from '@/components/pages/LoansPage';

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
        path: "credit-line",
        element: <CreditLinePage />,
        routeMetadata: {
          pageIdentifier: 'credit-line',
        },
      },
      {
        path: "contacts",
        element: <ContactsPage />,
        routeMetadata: {
          pageIdentifier: 'contacts',
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
        path: "leases",
        element: <LeasesPage />,
        routeMetadata: {
          pageIdentifier: 'leases',
        },
      },
      {
        path: "loans",
        element: <LoansPage />,
        routeMetadata: {
          pageIdentifier: 'loans',
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
