import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import CategoryProductsPage from "./pages/CategoryProductsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/categories/:id" element={<CategoryProductsPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
