import { Box, Container, useTheme, useMediaQuery } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--background-light)',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2 },
          transition: 'padding 0.3s ease',
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            pt: 2,
            pb: 4,
            boxShadow: { sm: 'var(--box-shadow)' },
            borderRadius: { sm: 'var(--border-radius)' },
            backgroundColor: { sm: 'var(--background-white)' },
            mt: { sm: 2, md: 3 },
            mb: { sm: 2, md: 3 },
          }}
        >
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;