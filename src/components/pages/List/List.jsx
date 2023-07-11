import { Box } from '@mui/material';
import { ProductCardContainer } from '../../common/productCard/ProductCardContainer';

const List = ({ items }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
      {items.map((item) => {
        return (
          <ProductCardContainer key={item.id} item={item} />
        );
      })}
    </Box>
  );
};

export { List };
