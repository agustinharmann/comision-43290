import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io'
import { keyframes } from '@mui/styled-engine';
import { Box, List, ListItemButton, Typography } from '@mui/material';

const Userwidget = () => {

  const [dropMenuUserRol, setDropUserRol] = useState(false);

  const handleDropMenu = () => {
    setDropUserRol(!dropMenuUserRol);
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
        margin: '0px 10px',
        cursor: 'pointer',
        position: 'relative'
      }}
      onClick={handleDropMenu}
    >
      <Typography sx={{
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        '&:hover': {
          color: '#CCCCCC'
        }
      }}>
        USER
        <IoIosArrowDown size='25px' style={{
          marginLeft: '5px',
          animation: `${rotateAnimation} 0.3s linear`,
          transform: dropMenuUserRol ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out'
        }} />
      </Typography>
      {dropMenuUserRol &&
        <List
          sx={{
            position: 'absolute',
            top: '30px',
            right: '10px',
            background: '#1B1B1D',
            margin: '0px',
            borderRadius: '5px',
            zIndex: '10'
          }}
          onClick={handleDropMenu}
        >
          <Link to="/">
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
              USER
            </ListItemButton>
          </Link>
          <Link to='/dashboard'>
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
              ADMIN
            </ListItemButton>
          </Link>
        </List>
      }
    </Box>
  );
};

export { Userwidget };
