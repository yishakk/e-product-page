import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductShowcase from "./components/ProductShowcase";
import ProductDetails from "./components/ProductDetails";
import './components/css/product.css'



function App() {
  const [count, setCount] = useState(0)

  function updateCount (val) {
    setCount(val)
  }

  return (
    <div className="App">
      <Navbar cartCount={count} />
      <div className="content">
      <ProductShowcase />
      <ProductDetails updateCount={updateCount} />
      </div>
    
    </div>
  );
}

export default App;
