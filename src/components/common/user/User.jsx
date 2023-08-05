import { Box } from '@mui/material';
import { UserwidgetContainer } from '../userWidget/UserWidgetContainer';
import { ProfileWidgetConatiner } from '../profileWidget/ProfileWidgetContainer';

const User = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <UserwidgetContainer />
      <ProfileWidgetConatiner />
    </Box>
  );
};

export { User };
