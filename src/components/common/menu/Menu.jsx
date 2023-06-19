import { Box, Button } from '@mui/material';
import { CartWidgetContainer } from '../cartWidget/CartWidgetContainer';

const Menu = ({ itemsMenu }) => {

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
      <CartWidgetContainer />
    </Box>
  );
};

export { Menu };
