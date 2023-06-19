import { Box, Button } from '@mui/material';
import { CartWidget } from '../cartWidget/CartWidget';

const Menu = () => {

  const itemsMenu = ['Inicio', 'Productos', 'Acerca de'];

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      {
        itemsMenu.map((item, i) => (
          <Button color='inherit' key={i}>{item}</Button>
        ))
      }
      hacer componetnes contenedores
      <CartWidget />
    </Box>
  );
};

export { Menu };
