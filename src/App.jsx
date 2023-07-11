import { NavbarContainer } from './components/layout/navbar/NavbarContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListContainer } from './components/pages/List/ListContainer';
import { ItemDetailContainer } from './components/pages/itemDetail/ItemDetailContainer';
import { CartContainer } from './components/pages/cart/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<ListContainer />} />
        <Route path="/category/:categoryName" element={<ListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />


        <Route path='*' element={<h1>404 - Not found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
