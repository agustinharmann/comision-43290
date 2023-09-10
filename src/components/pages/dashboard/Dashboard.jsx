import { Box, Button, Typography } from '@mui/material'
import { db } from '../../../firebaseConfig'
import { addDoc, collection } from '@firebase/firestore'
import { products } from '../../../productsMock'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const rellenar = () => {
    // let refCollection = collection(db, 'products')
    // products.forEach((prod) => {
    //   addDoc(refCollection, prod)
    // });
    console.log('Desabilitado, me vas a llenar la base de datos ;)');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          padding: '20px',
        }}
      >
        <Link
          to='/'
        >
          <Button
            variant='contained'
            sx={{
              background: '#4D3871'
            }}
          >
            At Home
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          variant='contained'
          onClick={rellenar}
          disabled
        >
          Rellenar base de datos
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography>
          (Al loggearse como admin, habría una vista de filas y columnas para ingresar o editar productos).
        </Typography>
      </Box>
    </Box>
  );
};

export { Dashboard };
