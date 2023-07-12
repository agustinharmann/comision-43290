import { Badge, Box } from '@mui/material';
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to={'/cart'}>
      <Box sx={{ margin: '0px 10px', cursor: 'pointer' }}>
        <Badge badgeContent={4} color='primary'>
          <BsCart2 size={'24px'} />
        </Badge>
      </Box>
    </Link>
  );
};

export { CartWidget };
