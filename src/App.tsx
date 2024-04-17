import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ErrorPage from './Pages/404'
import SingleProductPage from "./Pages/SingleProductPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from "react";
const ThemeContext = React.createContext('light');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/store",
    element: <Store />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/product/:productId',
    element: <SingleProductPage/>
  }
]);
{router}
function App() {
  return (
    <>
 <ThemeContext.Provider value="dark"> {/* Providing the dark theme */}
      <RouterProvider router={router}/>
    </ThemeContext.Provider>    </>
  );
}

export default App;
