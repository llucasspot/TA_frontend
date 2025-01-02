import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useService } from '#/utils/di/react';
import { Router } from '#/utils/routing/react';

export const App = () => {
  const queryClient = useService(QueryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ToastContainer
        style={{ zIndex: 10000 }}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider>
  );
};
