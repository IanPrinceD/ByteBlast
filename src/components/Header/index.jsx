import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (language) => {
    // Add logic here to apply the selected language to the whole page
    // Api will do.
    // Here, we are just updating the state for demonstration purposes
    setSelectedLanguage(language);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              textAlign: 'center',
              textTransform: 'capitalize',
              margin: '',
            }}
          >
            summer sale for all swim suits and free express delivery -{' '}
            <Box
              variant="body1"
              component="span"
              sx={{
                textTransform: 'uppercase',
                display: 'inline-block',
                marginRight: '1rem',
              }}
            >
              off 50%!
            </Box>
            <Link
              to=""
              style={{
                textDecoration: 'underline',
                color: '#fff',
                fontWeight: '600',
              }}
            >
              ShopNow
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '.8rem',
            right: '14rem',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.6rem',
            }}
          >
            {selectedLanguage}
          </Typography>
          <ExpandMoreIcon
            sx={{ color: '#fff', fontSize: '3rem', cursor: 'pointer' }}
            onClick={() => handleLanguageChange('SomeOtherLanguage')}
          />
          {/* You can replace 'SomeOtherLanguage' with your actual languages */}
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
