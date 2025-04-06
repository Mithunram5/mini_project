import { Box, Container, Typography, Link as MuiLink, Grid, Divider, useTheme, useMediaQuery } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 3, md: 4 },
        px: { xs: 2, sm: 3 },
            mt: 'auto',
        backgroundColor: '#1b5e20',
        backgroundImage: 'linear-gradient(135deg, #1b5e20 0%, #388e3c 50%, #43a047 100%)',
        color: 'white',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #80E27E, #4CAF50, #1b5e20)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          pointerEvents: 'none',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RecyclingIcon sx={{ mr: 1, color: 'var(--primary-light)' }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                EcoTrack
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: '90%' }}>
              A simple and effective way to track and manage waste for a cleaner environment.
            </Typography>
            <Box sx={{ display: 'flex', mt: 2, gap: 2 }}>
              <MuiLink 
                href="#" 
                color="inherit" 
                sx={{ 
                  opacity: 0.8, 
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    color: '#80E27E'
                  },
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <GitHubIcon />
              </MuiLink>
              <MuiLink 
                href="#" 
                color="inherit" 
                sx={{ 
                  opacity: 0.8, 
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    color: '#80E27E'
                  },
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <LinkedInIcon />
              </MuiLink>
              <MuiLink 
                href="#" 
                color="inherit" 
                sx={{ 
                  opacity: 0.8, 
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    color: '#80E27E'
                  },
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }}
              >
                <TwitterIcon />
              </MuiLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600, color: '#80E27E' }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink 
                  href="/" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    opacity: 0.9, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { 
                      opacity: 1, 
                      pl: 0.5, 
                      color: '#80E27E',
                      transition: 'all 0.3s ease' 
                    } 
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      mr: 1, 
                      fontSize: '1.2rem', 
                      transition: 'transform 0.3s ease',
                      display: 'inline-block',
                      '&:hover': { transform: 'translateX(3px)' }
                    }}
                  >
                    →
                  </Box> 
                  Dashboard
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink 
                  href="/log-waste" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    opacity: 0.9, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { 
                      opacity: 1, 
                      pl: 0.5, 
                      color: '#80E27E',
                      transition: 'all 0.3s ease' 
                    } 
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      mr: 1, 
                      fontSize: '1.2rem', 
                      transition: 'transform 0.3s ease',
                      display: 'inline-block',
                      '&:hover': { transform: 'translateX(3px)' }
                    }}
                  >
                    →
                  </Box> 
                  Log Waste
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink 
                  href="/statistics" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    opacity: 0.9, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { 
                      opacity: 1, 
                      pl: 0.5, 
                      color: '#80E27E',
                      transition: 'all 0.3s ease' 
                    } 
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      mr: 1, 
                      fontSize: '1.2rem', 
                      transition: 'transform 0.3s ease',
                      display: 'inline-block',
                      '&:hover': { transform: 'translateX(3px)' }
                    }}
                  >
                    →
                  </Box> 
                  Statistics
                </MuiLink>
              </Box>
              <Box component="li" sx={{ mb: 1.5 }}>
                <MuiLink 
                  href="/tips" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none', 
                    opacity: 0.9, 
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': { 
                      opacity: 1, 
                      pl: 0.5, 
                      color: '#80E27E',
                      transition: 'all 0.3s ease' 
                    } 
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      mr: 1, 
                      fontSize: '1.2rem', 
                      transition: 'transform 0.3s ease',
                      display: 'inline-block',
                      '&:hover': { transform: 'translateX(3px)' }
                    }}
                  >
                    →
                  </Box> 
                  Tips
                </MuiLink>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#80E27E' }}>
              About
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              EcoTrack is a mini project developed to help track and manage waste efficiently.
              The application aims to promote sustainable waste management practices and environmental consciousness.
            </Typography>
            <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}>
              <Typography variant="body2" sx={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
                "Every small action counts towards a cleaner planet. Start tracking your waste today!"
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} pt={3} borderTop={1} borderColor="rgba(255,255,255,0.2)" sx={{ position: 'relative' }}>
          <Typography variant="body2" align="center" sx={{ 
            py: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            '& svg': { fontSize: 18, color: '#80E27E' }
          }}>
            <RecyclingIcon /> © {currentYear} EcoTrack Waste Management Tracker. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;