import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartContextContainer } from './context/CartContextContainer';

function App() {
  return (
    <BrowserRouter>
      <CartContextContainer>
        <AppRouter />
      </CartContextContainer>
    </BrowserRouter>
  )
}

export default App
