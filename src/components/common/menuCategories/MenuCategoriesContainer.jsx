import { MenuCategories } from "./MenuCategories"
import { keyframes } from '@mui/styled-engine';
import { categories } from '../../../categoriesMock';
import { useRef, useState } from "react";
import { CartWidgetContainer } from "../cartWidget/CartWidgetContainer";
import { Box } from "@mui/material";


const MenuCategoriesContainer = () => {

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }`;

  return (
    <Box
      display={'flex'}
    >
      <MenuCategories
        anchorRef={anchorRef}
        open={open}
        handleToggle={handleToggle}
        handleClose={handleClose}
        rotateAnimation={rotateAnimation}
        categories={categories}
      />
      <CartWidgetContainer />
    </Box>
  );
};

export { MenuCategoriesContainer };
