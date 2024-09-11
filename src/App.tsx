import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import ProfilePage from "./pages/ProfilePage";
import RegisterForm from "./pages/RegisterForm";
import Applayout from "./pages/Applayout";
import Countries from "./pages/Countries";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 1. Create variable router terus panggil function createBrowseRouter()
const router = createBrowserRouter([
  //2. Define path sama element
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "countries",
        element: <Countries />,
      },
    ],
  },
]);

//Cashing -> bikin sebuah storage ato data jadi kalo butuh fetch menggunakan data yang sama di page berbeda jadi langsung diambil aja di storage nya
const client = new QueryClient();

export default function App() {
  //3. return <RouterProvider></RouterProvider>
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
