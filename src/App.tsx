import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "modules/routing";
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer/>
      </QueryClientProvider>
    )
}

export default App;