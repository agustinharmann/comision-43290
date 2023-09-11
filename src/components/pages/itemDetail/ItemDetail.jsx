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

            {product.title ?
              <Typography variant="h4" gutterBottom>
                {product.title}
              </Typography> : <Typography></Typography>}

            {product.category ?
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                {product.category}
              </Typography> : <Typography></Typography>}

            {product.image ? <CardMedia style={{ width: 300, height: 300, marginBottom: '16px' }} component="img" alt={product?.title} image={product?.image} /> : <Typography></Typography>}
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
              {product.price ? product.price : <Typography></Typography>}
            </Typography>

            {product.description ?
              <Typography variant="body1" color="textSecondary" gutterBottom>
                {product.description}
              </Typography> : <Typography></Typography>}

            {cantidadEnCarrito && <Typography variant="h5" color="textSecondary">
              Ya tenés {cantidadEnCarrito} unidades en tu carrito.
            </Typography>}

            {product.stock ?
              <Typography variant="body1" color="textSecondary" gutterBottom>
                <strong>Stock</strong> : {product.stock} unidades
              </Typography> : <Typography></Typography>}

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
