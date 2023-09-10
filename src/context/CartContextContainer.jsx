import { createContext, useState } from 'react';

const CartContext = createContext();

const CartContextContainer = ({ children }) => {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartCoderHouse")) || []);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      localStorage.setItem("cartCoderHouse", JSON.stringify(newArr))
      setCart(newArr);

      setCart(newArr);
    } else {
      localStorage.setItem("cartCoderHouse", JSON.stringify([...cart, product]))
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cartCoderHouse")
    setCart([]);
  };

  const deleteById = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    localStorage.setItem("cartCoderHouse", JSON.stringify(newArr))
    setCart(newArr);
  };

  const getTotalQuantity = () => {

    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity
    }, 0)

    return total
  }

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + (elemento.price * elemento.quantity)
    }, 0)
    total = Math.round(total)
    return total
  }

  const getQuantityById = (id) => {

    let producto = cart.find((elemento) => elemento.id === id)

    return producto?.quantity
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    getTotalQuantity,
    getTotalPrice,
    getQuantityById
  };

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export { CartContextContainer };
