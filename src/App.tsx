import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { store } from "modules/redux";
import { router } from "modules/routing";
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
          <ToastContainer/>
        </Provider>
      </QueryClientProvider>
    )
}

export default App;