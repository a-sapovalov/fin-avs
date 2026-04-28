import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import CreditLinePage from '@/components/pages/CreditLinePage';
import ContactsPage from '@/components/pages/ContactsPage';
import ApplicationPage from '@/components/pages/ApplicationPage';
import LoansPage from '@/components/pages/LoansPage';
import PriceListPage from '@/components/pages/PriceListPage';
import FAQPage from '@/components/pages/FAQPage';

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
        path: "loans",
        element: <LoansPage />,
        routeMetadata: {
          pageIdentifier: 'loans',
        },
      },
      {
        path: "price-list",
        element: <PriceListPage />,
        routeMetadata: {
          pageIdentifier: 'price-list',
        },
      },
      {
        path: "faq",
        element: <FAQPage />,
        routeMetadata: {
          pageIdentifier: 'faq',
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
