import { BrowserRouter } from 'react-router-dom';
import { CartContextContainer } from './context/CartContextContainer';
import { AppRouter } from './router/AppRouter';

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
