import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { List } from './List';
// import { products } from '../../../productsMock';

import { db } from '../../../firebaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';

const ListContainer = () => {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {

    let consulta;

    let productsCollection = collection(db, 'products');

    if (!categoryName) {
      consulta = productsCollection
    } else {
      consulta = query(productsCollection, where('category', '==', categoryName))
    };

    getDocs(consulta).then((res) => {
      console.log(res.docs);
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id }
      });
      setItems(arrayProductos);
      console.log(arrayProductos);
      // hay que generar un nuevo objetos comninando el id del producto de firebase y el resto de los atributos del producto porque firebase lo separa
    });


    // let productosFiltrados = products.filter(elemento => elemento.category === categoryName);

    // const productosMostrados = new Promise((resolve, reject) => {
    //   resolve(categoryName ? productosFiltrados : products)
    // })

    // productosMostrados
    //   .then((resouesta) => setItems(resouesta))
    //   .catch((error) => console.warn(error));


  }, [categoryName]);

  return (
    <List
      sx={{
        border: '1px solid green'
      }}
      items={items}
    />
  );
};

export { ListContainer };
