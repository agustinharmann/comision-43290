import { Link } from 'react-router-dom';
import logoEcommerce from '../../../assets/logoEcommerce.png';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
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
        <Box sx={{
          maxWidth: { xs: '200px', md: '130px' },
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Link
            to='/'
            style={{
              padding: '10px',
              display: 'flex',
            }}
          >
            <img
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
              src={logoEcommerce}
              alt="Logo footer"
            />
          </Link>
        </Box>
        <MenuContainer />
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
