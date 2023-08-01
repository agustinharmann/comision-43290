import { Badge, Box } from '@mui/material';
import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContextContainer';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext)

  let total = getTotalQuantity();

  return (
    <Link to='/cart'>
      <Box sx={{ margin: '0px 10px', cursor: 'pointer' }}>
        <Badge
          badgeContent={total}
          color='primary'
          showZero
        >
          <BsCart2 size={'24px'} />
        </Badge>
      </Box>
    </Link>
  );
};

export { CartWidget };
