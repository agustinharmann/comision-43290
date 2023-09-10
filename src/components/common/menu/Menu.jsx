import { Box } from '@mui/material';
import { MenuCategoriesContainer } from '../menuCategories/MenuCategoriesContainer';
import { UsersInfoContainer } from '../usersInfo/UsersInfoContainer';
import { CartWidgetContainer } from '../cartWidget/CartWidgetContainer';


const Menu = () => {

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <MenuCategoriesContainer />
      <Box
        sx={{
          display: 'flex',
          margin: { xs: '12px 0px' }
        }}
      >
        <UsersInfoContainer />
        <CartWidgetContainer />
      </Box>
    </Box>
  );
};

export { Menu };
