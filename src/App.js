import './App.css';
import { Routes, Route } from "react-router-dom";
import { HOME } from './pages/Home';
import { CART } from './pages/Cart';
import { NAVBAR } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <Routes>
          <Route exact path="/" element={<HOME/>}/>
          <Route path="/cart" element={<CART/>}/>
        </Routes>
    </div>
  );
}

export default App;
