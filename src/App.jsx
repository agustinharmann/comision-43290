import { NavbarContainer } from './components/layout/navbar/NavbarContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListContainer } from './components/pages/List/ListContainer';
import { ItemDetailContainer } from './components/pages/itemDetail/ItemDetailContainer';
import { CartContainer } from './components/pages/cart/CartContainer';
import { CartContextContainer } from './context/CartContextContainer';

function App() {
  return (
    <BrowserRouter>
      <CartContextContainer>

        <NavbarContainer />
        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/category/:categoryName" element={<ListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />


          <Route path='*' element={<h1>404 - Not found</h1>} />

        </Routes>
      </CartContextContainer>
    </BrowserRouter>
  )
}

export default App
