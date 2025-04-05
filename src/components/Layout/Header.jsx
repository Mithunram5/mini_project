import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { title: 'Dashboard', path: '/' },
    { title: 'Log Waste', path: '/log-waste' },
    { title: 'Statistics', path: '/statistics' },
    { title: 'Tips', path: '/tips' },
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
    <AppBar position="static" sx={{ backgroundColor: 'var(--primary-color)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <RecyclingIcon sx={{ mr: 1 }} />
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
            }}
          >
            EcoTrack
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex' }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                component={Link}
                to={item.path}
                sx={{ color: 'white', mx: 1 }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;