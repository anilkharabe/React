import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import POC from "./POC/POC";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaruntDetails from './components/RestaurantDetails';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:'/',
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/poc",
        element: <POC />,
      },
      {
        path: '/restaurant/:resId/:resName',
        element: <RestaruntDetails />
      }
    ],
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);
