import { Box, Button, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { CartWidgetContainer } from '../cartWidget/CartWidgetContainer';
import { UserWidgetConatiner } from '../userWidget/UserWidgetContainer';
import { useState } from 'react';
import { categories } from '../../../categoriesMock';

const Menu = () => {

  const [dropDownMenu, setDropDownMenu] = useState(false);

  const handleDopMenu = () => {
    setDropDownMenu(!dropDownMenu);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box>
          <Typography onClick={handleDopMenu} sx={{ margin: '0px 10px', fontSize: '15px' }}>
            CATEGORIAS
          </Typography>
        </Box>
        {dropDownMenu &&
          <List sx={{ position: 'absolute', top: '30px', background: '#000000', margin: '0px', padding: '5px' }}>
            {categories.map((cat) => {
              return (
                <ListItemButton key={cat.title} onClick={handleDopMenu} sx={{ padding: '8px' }}>
                  <ListItemText sx={{ color: '#FFFFFF', margin: '0px', padding: '0px' }}>
                    {cat.title}
                  </ListItemText>
                </ListItemButton>
              )
            })}
          </List>
        }
      </Box>
      <Typography sx={{ margin: '0px 10px', fontSize: '15px' }}>
        FAVORITOS
      </Typography>
      <Box
        sx={{
          display: 'flex',
          margin: { xs: '12px 0px' }
        }}
      >
        <CartWidgetContainer />
        <UserWidgetConatiner />
      </Box>
    </Box>
  );
};

export { Menu };
