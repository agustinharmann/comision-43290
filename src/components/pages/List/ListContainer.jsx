import { useState } from 'react';
import { List } from './List';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { products } from '../../../productsMock';

const ListContainer = () => {

  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(elemento => elemento.category === categoryName);

    const productosMostrados = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : products)
    })

    productosMostrados
      .then((resouesta) => setItems(resouesta))
      .catch((error) => console.warn(error))
  }, [categoryName]);

  return (
    <List items={items} />
  );
};

export { ListContainer };
