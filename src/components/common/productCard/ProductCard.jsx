import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsCart2 } from 'react-icons/bs';

const ProductCard = ({ greeting }) => {

  return (
    <Card sx={{ maxWidth: 300, border: '1px solid #DDDDDD', background: '#1A2027' }}>
      {/* maxheader */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            C
          </Avatar>
        }
        title={greeting}
        // title={title}
        action={
          <IconButton aria-label='settings' sx={{ color: '#FFFFFF' }}>
            <MoreVertIcon />
          </IconButton>
        }
        sx={{ textAlign: 'center', color: '#FFFFFF' }}
      />
      <CardMedia
        component='img'
        height='194'
        objet-fit='content'
        image='https://res.cloudinary.com/drxn0evox/image/upload/v1687203114/samples/ecommerce/accessories-bag.jpg'
        // image={img}
        alt='Paella dish'
      // alt={title}
      />
      <CardContent>
        <Typography variant='body2' color='#FFFFFF' overflow='auto' maxHeight='100px' padding='0px 10px'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur molestiae quaerat id saepe eius quam enim possimus voluptas nobis nemo dignissimos aspernatur, est facere veniam, vel consequuntur tenetur. Consequuntur.
        </Typography>
        {/* {descripton} */}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to cart' sx={{
          background: '#FFFFFF',
          color: '#000000',
          '&:hover': {
            background: '#5E5E5E',
            color: '#CCCCCC'
          }
        }}>
          {/* mas adelante ternario para que si está en el carrito sea de otro color */}
          <BsCart2 size={'20px'} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export { ProductCard };
