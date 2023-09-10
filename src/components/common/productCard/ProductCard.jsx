import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BsCart2 } from 'react-icons/bs';

const ProductCard = ({ item }) => {

  return (
    <Link to={`/itemDetail/${item.id}`}>
      <Card
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          minHeight: '320px',
          maxHeight: '320px',
          margin: '10px',
          border: '1px solid gray'
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt={item.title}
            sx={{
              borderRadius: '0px 0px 2px 2px'
            }}
          />
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '278px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                margin: '0px',
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" sx={{ display: 'flex', alignItems: 'center' }}>
            Ver más
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export { ProductCard };
