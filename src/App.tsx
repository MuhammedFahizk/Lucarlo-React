import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import ErrorPage from './Pages/404'
import SingleProductPage from "./Pages/SingleProductPage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from "react-redux";
import  { SetStateAction, useState } from "react";
import { AppContext } from "../src/AppContext";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feathers/cartSlice";
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
  const store = configureStore({
    reducer:{
      cart: cartReducer,
    }
  })
  const [isCartCount, setCartCount] = useState(0)
  const updateCartCount = (newCount: SetStateAction<number>) => {
    setCartCount(newCount);
  };
  return (
    <>
      <AppContext.Provider value={{ isCartCount, updateCartCount }}>
        <Provider store= {store}>
      <RouterProvider router={router}/>
      </Provider>
    </AppContext.Provider>    </>
  );
}

export default App;
