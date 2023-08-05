import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BsCart2 } from 'react-icons/bs';

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
          justifyContent: 'flex-end'
        }}
      >
        <Link to={`/itemDetail/${item.id}`}>
          <Button variant="contained" sx={{display: 'flex', alignItems: 'center'}}>
            Ver más
          </Button>
        </Link>
      </CardActions>

    </Card>
  );
};

export { ProductCard };
