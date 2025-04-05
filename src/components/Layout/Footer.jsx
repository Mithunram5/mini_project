import { Box, Container, Typography, Link as MuiLink, Grid } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'var(--primary-dark)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RecyclingIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                EcoTrack
              </Typography>
            </Box>
            <Typography variant="body2">
              A simple and effective way to track and manage waste for a cleaner environment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Typography variant="body2" component="div">
              <MuiLink href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Dashboard
              </MuiLink>
              <MuiLink href="/log-waste" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Log Waste
              </MuiLink>
              <MuiLink href="/statistics" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Statistics
              </MuiLink>
              <MuiLink href="/tips" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Tips
              </MuiLink>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              About
            </Typography>
            <Typography variant="body2">
              EcoTrack is a mini project developed to help track and manage waste efficiently.
              The application aims to promote sustainable waste management practices.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3} pt={3} borderTop={1} borderColor="rgba(255,255,255,0.2)">
          <Typography variant="body2" align="center">
            © {currentYear} EcoTrack Waste Management Tracker. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;