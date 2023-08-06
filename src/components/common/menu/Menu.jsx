import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartWidgetContainer } from '../cartWidget/CartWidgetContainer';
import { categories } from '../../../categoriesMock';

import { Box, List, ListItemButton, Typography } from '@mui/material';
import { keyframes } from '@mui/styled-engine';
import { IoIosArrowDown } from 'react-icons/io';
import { UserContainer } from '../user/UserContainer';

const Menu = () => {

  const [dropMenuCategory, setDropMenuCategory] = useState(false);

  const handleDropMenu = () => {
    setDropMenuCategory(!dropMenuCategory);
  };

  const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' }
      }}
    >
      <Box
        onClick={handleDropMenu}
        sx={{
          position: 'relative',
          cursor: 'pointer'
        }}
      >
        <Box>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: '0px 10px',
              fontSize: '15px',
              color: '#FFFFFF',
              '&:hover': {
                color: '#CCCCCC'
              }
            }}
          >
            CATEGORIAS
            <IoIosArrowDown size='25px' style={{
              marginLeft: '5px',
              animation: `${rotateAnimation} 0.3s linear`,
              transform: dropMenuCategory ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease-in-out'
            }} />
          </Typography>
        </Box>

        {dropMenuCategory &&
          <List
            sx={{
              position: 'absolute',
              top: '30px',
              background: '#1B1B1D',
              margin: '0px',
              borderRadius: '5px',
              zIndex: '10'
            }}
          >
            {categories.map((cat) => {
              return (
                <Link
                  key={cat.title}
                  to={`category/${cat.title}`}
                  onClick={handleDropMenu}
                >
                  <ListItemButton
                    sx={{
                      width: '100%',
                      height: '100%',
                      background: '#1B1B1D',
                      '&:hover': {
                        background: '#CCCCCC',
                        color: '#000000'
                      }
                    }}
                  >
                    {cat.title}
                  </ListItemButton>
                </Link>
              );
            })}
            <Link
              to={'/'}
              onClick={handleDropMenu}
            >
              <ListItemButton
                sx={{
                  width: '100%',
                  height: '100%',
                  background: '#1B1B1D',
                  '&:hover': {
                    background: '#CCCCCC',
                    color: '#000000'
                  }
                }}
              >
                Todos los productos
              </ListItemButton>
            </Link>
          </List>
        }
      </Box>
      <Box
        sx={{
          display: 'flex',
          margin: { xs: '12px 0px' }
        }}
      >
        <UserContainer />
        <CartWidgetContainer />
      </Box>
    </Box>
  );
};

export { Menu };
