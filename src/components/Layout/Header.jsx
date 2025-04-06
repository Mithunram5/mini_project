import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RecyclingIcon from '@mui/icons-material/Recycling';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { title: 'Dashboard', path: '/', icon: <DashboardIcon /> },
    { title: 'Log Waste', path: '/log-waste', icon: <AddCircleIcon /> },
    { title: 'Statistics', path: '/statistics', icon: <BarChartIcon /> },
    { title: 'Tips', path: '/tips', icon: <LightbulbIcon /> },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem button component={Link} to={item.path} key={item.title}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{ 
        backgroundColor: 'var(--primary-color)',
        backgroundImage: 'linear-gradient(to right, var(--primary-color), var(--primary-dark))',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RecyclingIcon sx={{ mr: 1, fontSize: { xs: 24, sm: 28 } }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              EcoTrack
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ 
                ml: 1,
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.15)' } 
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    color: 'white',
                    mx: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: 'var(--border-radius)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                borderTopLeftRadius: 'var(--border-radius)',
                borderBottomLeftRadius: 'var(--border-radius)',
              }
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;