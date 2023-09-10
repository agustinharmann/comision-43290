import React from 'react';
import { Link } from 'react-router-dom';
import logoEcommerce from '../../../assets/logoEcommerce.png';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Box, Typography } from "@mui/material";

const Footer = () => {

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        paddingTop: { xs: '20px', md: '50px' },
        color: '#FFFFFF',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: { xs: 'wrap', md: 'nowrap' },
        marginBottom: { xs: '0px', md: '20px' },
      }}>
        <Box sx={{
          width: { xs: '100%', md: '70%' },
          height: '100%',
          display: 'flex',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}>
          <Box sx={{
            width: { xs: '100%', md: '30%' },
            height: 'auto',
            paddingLeft: { xs: '0px', md: '0px' },
            paddingBottom: { xs: '20px', md: '50px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderBottom: { xs: '1px solid #FFFFFF', md: 'none' },
          }}>
            <Box sx={{
              maxWidth: { xs: '200px', md: '100%' },
              height: 'auto',
              marginBottom: '10px',
              display: 'flex',
              alignItems: { xs: 'center', md: 'normal' },
            }}>
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                src={logoEcommerce}
                alt="Logo footer"
              />
            </Box>
            <Typography sx={{
              textAlign: 'center',
              fontSize: '14px',
            }}>
              Tienda de bebidas
            </Typography>
          </Box>
          <Box sx={{
            width: { xs: '100%', md: '65%' },
            height: 'auto',
            padding: { xs: '15px 0px', md: '0px 0px 0px 100px' },
            marginTop: { xs: '0px', md: '30px' },
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: { xs: 'flex-start', md: 'normal' },
            borderBottom: { xs: '1px solid #FFFFFF', md: 'none' },
          }}>
            <Typography
              sx={{
                margin: '5px 0px',
                fontSize: { xs: '19px', md: '15px' }
              }}
            >
              Cómo comprar
            </Typography>
            <Typography
              sx={{
                margin: '5px 0px',
                fontSize: { xs: '19px', md: '15px' }
              }}
            >
              Cancelar una compra
            </Typography>
            <Typography
              sx={{
                margin: '5px 0px',
                fontSize: { xs: '19px', md: '15px' }
              }}
            >
              Contactos
            </Typography>
            <Typography
              sx={{
                margin: '5px 0px',
                fontSize: { xs: '19px', md: '15px' }
              }}
            >
              Franquicias
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: 'auto' },
            marginTop: { xs: '15px', md: '0px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'normal' },
          }}
        >
          <Box sx={{
            width: 'auto',
            height: 'auto',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'end',
          }}>
            <a
              href="https://www.linkedin.com/in/agustin-harmann-1a4794269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              < BsLinkedin
                style={{
                  margin: '0px 10px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                size="25px"
                color='#FFFFFF'
              />
            </a>
            <a
              href="https://github.com/agustinharmann"
              target="_blank"
              rel="noopener noreferrer"
            >
              < BsGithub
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                size="25px"
                color='#FFFFFF'
              />
            </a>
          </Box>
          <Typography sx={{
            margin: '8px 0px',
            textAlign: 'end',
          }}>
            agustinharmann@gmail.com
          </Typography>
          <Typography sx={{
            margin: '8px 0px',
            textAlign: 'end',
          }}>
            1153467724
          </Typography>
          <Typography sx={{
            margin: '8px 0px',
            textAlign: 'end',
          }}>
            Ejemplo 4444, San Martín, C4444
          </Typography>
        </Box >
      </Box >

      <Box sx={{
        width: '90%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid #FFFFFF',
        padding: '10px 0px'
      }}>
        <Box sx={{
          width: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'start', md: 'center' },
        }}>
          <Typography sx={{
            height: '14px',
            fontSize: '12px',
            padding: '10px 10px',
            paddingLeft: '0px',
            display: 'flex',
            alignItems: 'center',
            borderRight: { xs: 'none', md: '1px solid #FFFFFF' },
          }}>
            Powered by Agustin Harmann
          </Typography>
          <Typography sx={{
            height: '14px',
            fontSize: '12px',
            padding: { xs: '10px 10px 10px 0px', md: '10px 10px' },
            display: 'flex',
            alignItems: 'center',
          }}>
            Avisos Legales
          </Typography>
          <Typography sx={{
            height: '14px',
            fontSize: '12px',
            padding: { xs: '10px 10px 10px 0px', md: '10px 10px' },
            display: 'flex',
            alignItems: 'center',
          }}>
            ¿Como cuidamos tu privacidad?
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Box sx={{
            width: { xs: '80px', md: '80px' },
            height: { xs: '50px', md: '40px' },
            display: 'flex',
            alignItems: 'center',
          }}>
            <Link
              to='/'
            >
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                src={logoEcommerce}
                alt="Logo post footer"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export { Footer };
