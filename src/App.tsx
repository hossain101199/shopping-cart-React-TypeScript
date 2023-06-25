import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Store from "./pages/Store";
import About from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
};

export default App;
