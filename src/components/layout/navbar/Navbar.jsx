import { AppBar, Toolbar, Typography } from '@mui/material';
import { Menu } from '../../common/menu/Menu';

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'black', padding: '6px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' }
        }}>
        <Typography variant='h6' component='div'
          sx={{
            width: 'auto',
            padding: '6px 8px'
          }}>
          E-commerce
        </Typography>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
