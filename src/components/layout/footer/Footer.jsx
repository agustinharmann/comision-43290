import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '50px',
        color: '#FFFFFF',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '60px'
      }}
    >
      <h4>agustinharmann@gmail.com</h4>
    </Box>
  );
};

export { Footer };