import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import { IoIosArrowDown } from 'react-icons/io';
import { ListItemButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuCategories = ({
  anchorRef,
  open,
  handleToggle,
  handleClose,
  rotateAnimation,
  categories,
}) => {

  return (
    <>
      <ButtonGroup
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{
            color: '#FFFFFF',
            border: 'none',
            '&:hover': {
              color: '#CCCCCC',
              border: 'none',
            },
          }}
        >
          <Typography>
            CATEGORIAS
          </Typography>
          <IoIosArrowDown size='25px' style={{
            marginLeft: '5px',
            animation: `${rotateAnimation} 0.3s linear`,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out'
          }} />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
              background: '#1B1B1D',
              margin: '0px',
              borderRadius: '5px',
              zIndex: '10',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  <Link
                    to={'/'}
                    onClick={handleToggle}
                  >
                    <ListItemButton
                      sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
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
                  {categories.map((cat) => (
                    <Link
                      key={cat.title}
                      to={`category/${cat.title}`}
                      onClick={handleToggle}
                      style={{
                      }}
                    >
                      <ListItemButton
                        sx={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
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
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export { MenuCategories };
