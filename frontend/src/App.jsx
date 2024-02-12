import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Dashboard from './pages/dashboard/Dashboard'
import PageNotFound from './pages/PageNotFound'

export default function App() {

  return (
    <BrowserRouter>
      <ToastContainer theme="colored" draggable={false} hideProgressBar={true} />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/menu' element={<Menu />} /> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
