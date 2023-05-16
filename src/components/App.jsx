import './App.css';
import 'react-toastify/dist/ReactToastify.css';
//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/darkModeContext';

// React toastify
  import { ToastContainer } from 'react-toastify';

//Components 
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { Footer } from './Footer/Footer';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider darkMode={DarkModeProvider.darkMode}>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        </DarkModeProvider>
        <Footer/>
      </BrowserRouter>
    </>
  )
}