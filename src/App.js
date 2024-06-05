import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Navbar from './Pages/navbar';
// import Product from './Pages/product';
// import ProductFilter from './Pages/product-filter';
import Footer from './Pages/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product" element={<Product />} /> */}
          {/* <Route path="/product-filter" element={<ProductFilter />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
