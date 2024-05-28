import NavBar from "./components/Layouts/NavBar";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import ProductDetails from "./pages/ProjectDetails/ProductDetails";
import Home from "./pages/Home/Home";
import Footer from "./components/Layouts/Footer";
import { useRef } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <Router>
      <div className="relative w-full h-fit">
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition= {Bounce}
          />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            ></Route>
            <Route path="/product/:_id" element={<ProductDetails />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
