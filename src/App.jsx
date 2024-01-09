import MainPage from "./Pages/mainPage";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import DefaultLayout from './Components/DefaultLayout'
import AuthLayout from "./Components/AuthLayout";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <MainPage />
          </DefaultLayout>
        }
        path="/"
      />
      <Route
        element={
          <DefaultLayout>
            <ProductDetails />
          </DefaultLayout>
        }
        path="/products"
      />
      <Route
        element={
          <DefaultLayout>
            <Cart />
          </DefaultLayout>
        }
        path="/cart"
      />
      <Route
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
        path="/signin"
      />
      <Route
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
        path="/signup"
      />
    </Routes>
  );
}

export default App;
