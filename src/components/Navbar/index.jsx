import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { pageLinks } from './pagelinks';
import { NavbarContainer } from './style';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Badge,
  AppBar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position={scrolling ? 'fixed' : 'static'}
      top={0}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderBottom: '1px #808080 solid',
      }}
    >
      <NavbarContainer>
        <Typography variant="h1">Exclusive</Typography>
        <Box>
          {pageLinks.map(({ id, link, text }) => (
            <Link
              key={id}
              to={link}
              style={{
                marginRight: '1.5rem',
                color: '#000',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '1.6rem',
                position: 'relative',
              }}
            >
              {text}
              {location.pathname === link && (
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: '-2px',
                    borderBottom: '2px solid #808080',
                    opacity: '0.5',
                  }}
                />
              )}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            placeholder="What are you looking for?"
            id="fullWidth"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ fontSize: '3rem' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              marginRight: '2rem',
              backgroundColor: '#F5F5F5',
              borderRadius: '.5rem',
            }}
          />
          <Badge
            badgeContent={4}
            color="accent"
            sx={{ marginRight: '2rem', fontSize: '1rem' }}
          >
            <FavoriteBorderIcon color="primary" sx={{ fontSize: '3rem' }} />
          </Badge>
          <Badge badgeContent={4} color="accent">
            <ShoppingCartIcon color="primary" sx={{ fontSize: '3rem' }} />
          </Badge>
        </Box>
      </NavbarContainer>
    </AppBar>
  );
}

Link.propTypes = {
  id: PropTypes.number,
  link: PropTypes.string,
  text: PropTypes.string,
};

export default Navbar;
