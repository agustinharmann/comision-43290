import { Box } from '@mui/material';
import { UserCategoriesContainer } from '../userCategories/UserCategoriesContainer';
import { ProfileWidgetConatiner } from '../profileWidget/ProfileWidgetContainer';

const UsersInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <UserCategoriesContainer />
      <ProfileWidgetConatiner />
    </Box>
  );
};

export { UsersInfo };
