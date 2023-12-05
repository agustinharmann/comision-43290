import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BsCart2 } from 'react-icons/bs';

const ImgComprimir = ({ image }) => {
  // console.log(image);
  return (
    // <Link to={`/imgComprimir`}>
    <>
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
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt={'imgComprimir'}
            sx={{
              borderRadius: '0px 0px 2px 2px'
            }}
          />
        {/* <CardActionArea> */}
          {/* <img src={images.images} alt="" style={{height: '200px'}}/> */}
          {/* <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          > */}
            {/* <Typography
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
              imgComprimir
            </Typography> */}
          {/* </CardContent> */}
        {/* </CardActionArea> */}
        {/* <CardActions>
          <Button variant="contained" sx={{ display: 'flex', alignItems: 'center' }}>
            Ver más
          </Button>
        </CardActions> */}
      </Card>
      {/* </Link> */}
    </>
  );
};

export { ImgComprimir };
