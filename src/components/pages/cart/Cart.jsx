import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { CartContext } from '../../../context/CartContextContainer';
import Swal from "sweetalert2";

const Cart = () => {

  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "seguro quieres eliminar todo ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "si, limpiar",
      denyButtonText: `No, no limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  let total = getTotalPrice();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

      }}
    >
      <h2
        style={{
          margin: '20px 10px'
        }}
      >Mi carrito</h2>

      <Box
        sx={{
          width: '90%',
          minHeight: '60vh',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {cart.map((elemento) => {
          return (
            <Box
              key={elemento.id}
              sx={{
                width: "200px",
                maxHeight: '200px',
                margin: '10px',
                padding: '5px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: "2px solid steelblue"
              }}
            >
              <h3>{elemento.title}</h3>
              <h3>{elemento.price}</h3>
              <h4>Cantidad: {elemento.quantity}</h4>
              <Button variant="contained" onClick={() => deleteById(elemento.id)}>
                Eliminar
              </Button>
            </Box>
          );
        })}

      </Box>

      {cart.length > 0 && (
        <Box
          sx={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button variant="outlined" onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to='/formik'>
            <Button variant="outlined">Terminar compra</Button>
          </Link>
        </Box>
      )}

      <h2>El total del carrito es : {total} </h2>
    </Box>
  );
};

export { Cart };
