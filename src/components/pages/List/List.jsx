import { ProductCardContainer } from '../../common/productCard/ProductCardContainer';
import { Box, Skeleton, Stack } from '@mui/material';

const List = ({ items }) => {

  let arr = [1, 2, 3, 4];
  // mockeado

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {/* MEZCLAR CON CONDICIONAL DE ISLOADING PEEEEEEEEERO PARA DOS COSAS, ESTO YYYYYYYY EN CADA CARD Y EN CADA ITEMDETAIL */}
      {items.length > 0
        ? items.map((item) => {
          return (
            <ProductCardContainer key={item.id} item={item} />
          );
        }) : arr.map((elemento) => (
          <Stack spacing={1} key={elemento}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ))
      }

    </Box>
  );
};

export { List };
