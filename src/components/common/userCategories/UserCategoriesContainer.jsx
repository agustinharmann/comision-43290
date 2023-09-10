import { Box } from '@mui/material';

import { keyframes } from '@mui/styled-engine';

import { useRef, useState } from "react";
import { UserCategories } from './UserCategories';


const UserCategoriesContainer = () => {

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
    <>
      <UserCategories
        anchorRef={anchorRef}
        open={open}
        handleToggle={handleToggle}
        handleClose={handleClose}
        rotateAnimation={rotateAnimation}
      />
    </>
  );
};

export { UserCategoriesContainer };
