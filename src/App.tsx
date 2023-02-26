import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NavActiveLink from './components/NavActiveLink';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NotFound from './components/NotFound';
import PaymentOrder from './components/PaymentOrder';
import PlaceOrder from './components/PlaceOrder';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      {/* <NavActiveLink /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='place-order' element={<PlaceOrder />} />
        <Route path="payment" element={<PaymentOrder />} />
        <Route path="*" element={<NotFound />} />
        <Route path="products" element={<Products />}>
          <Route path="feature" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
