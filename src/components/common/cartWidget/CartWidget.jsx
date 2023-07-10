import { Badge, Box } from '@mui/material';
import { BsCart2 } from 'react-icons/bs'

const CartWidget = () => {
  return (
    <Box sx={{ margin: '0px 10px', cursor: 'pointer' }}>
      <Badge badgeContent={4} color='primary'>
        <BsCart2 size={'24px'} />
      </Badge>
    </Box>
  );
};

export { CartWidget };
