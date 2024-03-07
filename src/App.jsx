import "./styles/App.css";
import 'react-toastify/dist/ReactToastify.css'
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { ItemListContainer } from "./components/ItemListContainer";
import { Footer } from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import { NotFound } from "./components/NotFound";
import { CarritoProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Navbar />
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tienda" element={<ItemListContainer />} />
            <Route path="/categoria/:cid" element={<ItemListContainer />} />
            <Route path="/producto/:pid" element={<ItemDetailsContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};
