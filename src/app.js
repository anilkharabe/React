import { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import POC from "./POC/POC";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaruntDetails from "./components/RestaurantDetails";
import { lazy, Suspense, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // make the API call using userName and password and get the user Information
    const data = {
      name: "Aniruddha",
    };
    setUserName(data.name);
  }, []);

  const { loggedInUser } = useContext(UserContext);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/poc",
        element: <POC />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaruntDetails />,
      },
    ],
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);
