import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;
