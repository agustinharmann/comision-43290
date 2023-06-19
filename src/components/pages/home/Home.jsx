import { Box } from '@mui/material';
import { ListContainer } from '../../common/List/ListContainer';

const Home = () => {
  return (
    <Box sx={{padding: '0px 30px'}}>
      <ListContainer />
      {/* el home en mobile sera column y centrado */}
    </Box>
  );
};

export { Home };
