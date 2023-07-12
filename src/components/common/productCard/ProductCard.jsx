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
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ greeting, item }) => {

  // console.log(greeting);

  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: '5px',
        background: '#1A2027',
      }}>
      <CardHeader
        sx={{
          width: '100%',
          height: '60px',
          padding: '10px',
        }}
        title={
          <Typography
            sx={{
              width: '100%',
              maxWidth: '278px',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              color: '#FFFFFF',
            }}
          >
            {item.title}
          </Typography>
        }
      />


      <CardMedia
        component='img'
        height='194'
        objet-fit='content'
        image={item.image}
        alt={item.title}
      />

      <CardContent
        sx={{
          padding: '10px'
        }}
      >
        <Typography
          variant='body2'
          color='#FFFFFF'
          overflow='auto'
          minHeight='100px'
          maxHeight='100px'
          padding='0px 10px'
        >
          {item.description}
        </Typography>
      </CardContent>


      <CardActions
        sx={{
          justifyContent: 'space-between'
        }}
      // disableSpacin
      >
        <IconButton
          aria-label='add to cart'
          sx={{
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
        <Button variant="contained">
          <Link to={`/itemDetail/${item.id}`}>
            Ver más
          </Link>
        </Button>
      </CardActions>

    </Card>
  );
};

export { ProductCard };
