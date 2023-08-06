import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { MenuContainer } from '../../common/menu/MenuContainer';

const Navbar = () => {
  return (
    <AppBar position='static' sx={{ backgroundColor: 'black', padding: { xs: '6px', sm: '0px' } }}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'space-between' }
        }}>
        <Link to='/'>
          <Typography variant='h6' component='div'
            sx={{
              width: 'auto',
              padding: '6px 8px'
            }}>
            E-commerce
          </Typography>
        </Link>
        <MenuContainer />
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
