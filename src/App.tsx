import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import FeaturedProducts from './components/FeaturedProducts';
import Home from './components/Home';
import NavActiveLink from './components/NavActiveLink';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NotFound from './components/NotFound';
import PaymentOrder from './components/PaymentOrder';
import PlaceOrder from './components/PlaceOrder';
import Products from './components/Products';
import User from './components/User';
import UserDetails from './components/UserDetails';

// lazy loading
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {

  return (
    <>
      <Navbar />
      {/* <NavActiveLink /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback={<>Loading..</>}>
          <LazyAbout />
        </React.Suspense>
        } />
        <Route path='place-order' element={<PlaceOrder />} />
        <Route path="payment" element={<PaymentOrder />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="feature" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<User />} >
          <Route path=":id" element={<UserDetails  />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
