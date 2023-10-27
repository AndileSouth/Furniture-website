import './App.css';
import { Routes, Route } from "react-router-dom";
import { HOME } from './pages/Home';
import { CART } from './pages/Cart';
import { NAVBAR } from './components/Navbar';
import { SHOP } from './pages/Shop';
import { ShopContextProvider } from './context/ShopContext';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <NAVBAR/>
      <Routes>
          <Route exact path="/" element={<HOME/>}/>
          <Route path="/cart" element={<CART/>}/>
          <Route path="/shop" element={<SHOP/>}/>
        </Routes>
        </ShopContextProvider>
    </div>
  );
}

export default App;
