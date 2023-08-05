import { Box, Button } from '@mui/material'
import { db } from '../../../firebaseConfig'
import { addDoc, collection } from '@firebase/firestore'
import { products } from '../../../productsMock'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const rellenar = () => {
    let refCollection = collection(db, 'products')
    products.forEach((prod) => {
      addDoc(refCollection, prod)
    });
  };

  return (
    <>
      <Box>
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
        <h1>Ruta para el administrador</h1>
      </Box>

      <Button
        variant='contained'
        onClick={rellenar}
      >
        Rellenar base de datos
      </Button>
    </>
  )
}

export { Dashboard };