import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../productsMock';
import { CartContext } from '../../../context/CartContextContainer';
import { ItemDetail } from './ItemDetail';
import { getDoc, collection, doc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});

  const { id } = useParams();
  // console.log(id);

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);


  //MODIFICAR CUANDO USE FIRE

  useEffect(() => {

    let refCollection = collection(db, 'products');

    let refDoc = doc(refCollection, id);

    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));

    // let promesa = new Promise((resolve, reject) => {
    //   let productSelected = products.find((product) => product.id === +id)
    //   resolve(productSelected)
    // })

    // promesa.then((res) => setProduct(res)).catch(err => console.log(err))

  }, [id])

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    console.log(data);

    addToCart(data);

    // toast.success("Producto agregado", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  };

  return <ItemDetail
    product={product}
    agregarAlCarrito={agregarAlCarrito}
    cantidadEnCarrito={cantidadEnCarrito}
  />;
};

export { ItemDetailContainer };
