import { Box, Card, CardMedia, Typography } from "@mui/material";
import { CounterContainer } from '../../../components/common/counter/CounterContainer';

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {

  const { title, category, image, price, stock, description } = product;

  return (
    <>
      <Card>
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px' }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Category: {category}
          </Typography>
          <CardMedia style={{ width: 300, height: 300, marginBottom: '16px' }} component="img" alt={title} image={image} />
          <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Price: ${price}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '16px' }}>
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Stock: {stock} units
          </Typography>
        </Box>
      </Card>

      <CounterContainer
        cantidadEnCarrito={cantidadEnCarrito}
        stock={product.stock}
        agregarAlCarrito={agregarAlCarrito}
      />
    </>
  );
};

export { ItemDetail };
