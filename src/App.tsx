import { QueryClientProvider, QueryClient } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from './routers/router';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
