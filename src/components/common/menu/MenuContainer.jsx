import { Menu } from './Menu';

const MenuContainer = () => {

  const itemsMenu = ['Inicio', 'Productos', 'Acerca de'];

  return (
    <Menu
      itemsMenu={itemsMenu}
    />
  );
};

export { MenuContainer };
