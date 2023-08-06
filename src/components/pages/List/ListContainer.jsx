import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { List } from './List';
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
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id }
      });
      setItems(arrayProductos);
    });}, [categoryName]);

  return (
    <List
      items={items}
    />
  );
};

export { ListContainer };
