import './App.css';
import { Routes, Route } from "react-router-dom";
import { HOME } from './pages/Home';
import { CART } from './pages/Cart';
import { NAVBAR } from './components/Navbar';
import { SHOP } from './pages/Shop';
import { ShopContextProvider } from './context/ShopContext';
import { Gallery } from './pages/Gallery';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      hello
      <ShopContextProvider>
      <NAVBAR/>
      <Routes>
          <Route exact path="/Home" element={<HOME/>}/>
          <Route path="/cart" element={<CART/>}/>
          <Route path="/shop" element={<SHOP/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      <Footer/>
        </ShopContextProvider>
    </div>
  );
}

export default App;
