import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
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
      };
    });
  };

  let total = getTotalPrice();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '91vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '10px',
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
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'start' },
          justifyContent: { xs: 'start', md: 'center' },
          flexWrap: 'wrap',
        }}
      >
        {cart.length > 0 ? (
          cart.map((elemento) => {
            return (
              <Box
                key={elemento.id}
                sx={{
                  width: "250px",
                  minHeight: '200px',
                  maxHeight: '200px',
                  margin: '10px',
                  padding: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: "2px solid steelblue",
                }}
              >
                <Typography
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    padding: '0px 10px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                  }}
                >
                  {elemento.title}
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    padding: '0px 10px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  ${elemento.price}
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    padding: '0px 10px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                  }}
                >
                  Cantidad: {elemento.quantity}
                </Typography>
                <Link
                  to={`/itemDetail/${elemento.id}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    variant="outlined"
                  >
                    Ver producto
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  onClick={() => deleteById(elemento.id)}
                >
                  Eliminar
                </Button>
              </Box>
            );
          })
        ) : (<Box
          sx={{
            width: '90%',
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'center' },
            justifyContent: { xs: 'start', md: 'center' },
          }}
        >
          <Typography>
            No hay ningún producto en el carrito.
          </Typography>
          <Link
            to='/'
          >
            <Typography
              color={'primary'}
              sx={{
                textDecoration: 'underline'
              }}
            >
              Ir a la tienda
            </Typography>
          </Link>
        </Box>)}

      </Box>
      {
        cart.length > 0 && (
          <Box
            sx={{
              width: '90%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button variant="contained" onClick={limpiar}>
              Limpiar carrito
            </Button>
            <Typography
              textAlign={'center'}
              fontSize={'20px'}
            >
              Total: ${total}
            </Typography>
            <Link to='/formik'>
              <Button variant="contained">Terminar compra</Button>
            </Link>
          </Box>
        )
      }
    </Box >
  );
};

export { Cart };
