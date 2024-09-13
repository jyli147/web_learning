import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Cart from './components/body/context/Cart.tsx';
import { store } from './components/store/store.ts';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <StrictMode>
    <RouterProvider router={router} />
      </StrictMode>
    </Provider>
  </QueryClientProvider>
)
