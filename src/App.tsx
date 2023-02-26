import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NavActiveLink from './components/NavActiveLink';
import Navbar from './components/Navbar';
import PaymentOrder from './components/PaymentOrder';
import PlaceOrder from './components/PlaceOrder';

function App() {
  return (
    <>
      <Navbar />
      <NavActiveLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path="/payment" element={<PaymentOrder />} />
      </Routes>
    </>
  );
}

export default App;
