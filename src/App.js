import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import FindBuddy from "./components/pages/FindBuddy";
import Message from "./components/pages/Message";
import Favorite from "./components/pages/Favorite";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Logout from "./components/pages/Logout";
import NotFound from "./components/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/findbuddy",
        element: <FindBuddy />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
