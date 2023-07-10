import { Box } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';

const UserWidget = () => {
  return (
    <Box sx={{ margin: '0px 10px', cursor: 'pointer' }}>
      <BsPersonCircle size={'24px'} />
    </Box>
  );
};

export { UserWidget };
