import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../productsMock';
import { CartContext } from '../../../context/CartContextContainer';
import { ItemDetail } from './ItemDetail';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDoc, collection, doc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});

  const { id } = useParams();

  const { addToCart, getQuantityById } = useContext(CartContext);

  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {

    let refCollection = collection(db, 'products');

    let refDoc = doc(refCollection, id);

    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));

  }, [id])

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    addToCart(data);

    toast.success("Producto agregado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />;
      <ToastContainer />
    </>
  )
};

export { ItemDetailContainer };
