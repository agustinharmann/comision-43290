import { Box, Card, CardMedia, Skeleton, Stack, Typography } from "@mui/material";
import { CounterContainer } from '../../../components/common/counter/CounterContainer';

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {

  return (
    <>
      <Card sx={{
        boxShadow: 'none'
      }}>
        <Box>
          <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px' }}>
            <Typography variant="h4" gutterBottom>
              {/* {product?.title} */}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {/* Category: {product?.category} */}
            </Typography>
            {/* <CardMedia style={{ width: 300, height: 300, marginBottom: '16px' }} component="img" alt={product?.title} image={product?.image} /> */}
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {/* Price: ${product?.price} */}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '16px', width: '100%', maxWidth: '600px' }}>
              {/* {product?.description} */}
            </Typography>
            {/* {cantidadEnCarrito && <Typography variant="h5" color="textSecondary">
              Ya tenés {cantidadEnCarrito} unidades en tu carrito.
            </Typography>} */}
            <Typography variant="body2" color="textSecondary">
              {/* <strong>Stock</strong>: {product?.stock} units */}
            </Typography>
          </Box>
          <CounterContainer
            cantidadEnCarrito={cantidadEnCarrito}
            stock={product?.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        </Box>
      </Card>

    </>
  );
};

export { ItemDetail };
