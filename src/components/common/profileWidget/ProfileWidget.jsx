import { BsPersonCircle } from 'react-icons/bs';
import { Box } from '@mui/material';

const ProfileWidget = () => {
  return (
    <Box sx={{ margin: '0px 10px', cursor: 'pointer' }}>
      <BsPersonCircle size={'24px'} />
    </Box>
  );
};

export { ProfileWidget };
