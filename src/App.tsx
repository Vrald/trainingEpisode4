import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import ProfilePage from "./pages/ProfilePage";
import RegisterForm from "./pages/RegisterForm";

// 1. Create variable router terus panggil function createBrowseRouter()
const router = createBrowserRouter([
  //2. Define path sama element
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);

export default function App() {
  //3. return <RouterProvider></RouterProvider>
  return <RouterProvider router={router} />;
}
