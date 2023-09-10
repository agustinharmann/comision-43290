import { Box, Card, CardMedia, Typography } from "@mui/material";
import { CounterContainer } from '../../../components/common/counter/CounterContainer';

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {

  return (
    <>
      <Card sx={{
        boxShadow: 'none'
      }}>

        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px' }}>

          {product?.title ? <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography> : <Skeleton variant="h3" sx={{ fontSize: "1rem" }} />}

          {product?.category ? <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Category: {product.category}
          </Typography> : <Skeleton variant="text" sx={{ fontSize: "1rem" }} />}

          {product?.image ? <CardMedia style={{ width: 300, height: 300, marginBottom: '16px' }} component="img" alt={(product?.title ? product.title : 'product image')} image={product.image} /> : <Skeleton variant="rectangular" width={210} height={60} />}

          {product?.price ? <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Price: ${product.price}
          </Typography> : <Skeleton variant="text" sx={{ fontSize: "1rem" }} />}

          {product?.description ? <Typography variant="body1" style={{ marginBottom: '16px', width: '100%', maxWidth: '600px' }}>
            {product.description}
          </Typography> : <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>}

          {cantidadEnCarrito && <Typography variant="h5" color="textSecondary">
            Ya tenés {cantidadEnCarrito} unidades en tu carrito.
          </Typography>}

          {product?.stock ? <Typography variant="body2" color="textSecondary">
            <strong>Stock</strong>: {product.stock} units
          </Typography> : <Skeleton variant="text" sx={{ fontSize: "1rem" }} />}
        </Box>

        <CounterContainer
          cantidadEnCarrito={cantidadEnCarrito}
          stock={product.stock}
          agregarAlCarrito={agregarAlCarrito}
        />

      </Card >
    </>
  );
};

export { ItemDetail };
