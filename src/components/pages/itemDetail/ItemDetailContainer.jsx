import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../../productsMock';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});

  const { id } = useParams();
  // console.log(id);

  //MODIFICAR CUANDO USE FIRE

  useEffect(() => {

    let promesa = new Promise((resolve, reject) => {
      let productSelected = products.find((product) => product.id === +id)
      resolve(productSelected)
    })

    promesa.then((res) => setProduct(res)).catch(err => console.log(err))

  }, [id])

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);
  };

  return <ItemDetail
    product={product}
    agregarAlCarrito={agregarAlCarrito}
  />;
};

export { ItemDetailContainer };
