import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Payment from './pages/payment/Payment';
import PrivateRoutes from './components/PrivateRoutes';
import AdminPayment from './pages/payment/AdminPayment';

export default function App() {

  return (
    <BrowserRouter>
      <ToastContainer theme="colored" draggable={false} hideProgressBar={true} position="bottom-right" />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/payment' element={<Payment />} />
          <Route path='/admin-payment' element={<AdminPayment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
