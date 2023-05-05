import { DiscFull, Home, Movie, People, Settings } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import HomePage from "../pages/homePage";

const drawerWidth = 240;

const menuItems = [
  { icon: <Home />, label: "Home", page: <HomePage /> },
  { icon: <DiscFull />, label: "Discovery" },
  { icon: <People />, label: "Community" },
];

const libraryItems = [
  { icon: <Home />, label: "Recent" },
  { icon: <DiscFull />, label: "Bookmarked" },
  { icon: <People />, label: "Top-Rated" },
];

export default function PermanentDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        color="transparent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "0px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <IconButton sx={{ mr: 2 }}>
            <Movie />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MOVIES
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h8" noWrap component="div">
            Menu
          </Typography>
        </Toolbar>
        <Toolbar sx={{ mb: 2 }}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem disablePadding>
                <ListItemButton disableGutters>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
        <Toolbar>
          <Typography variant="h8" noWrap component="div">
            Library
          </Typography>
        </Toolbar>
        <Toolbar sx={{ mb: 2 }}>
          <List>
            {libraryItems.map((item, index) => (
              <ListItem disablePadding>
                <ListItemButton disableGutters>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Toolbar>
        <Toolbar>
          <List>
            <ListItem disablePadding>
              <ListItemButton disableGutters>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Toolbar>
      </Drawer>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography sx={{ mr: 5 }} variant="h7" noWrap component="div">
            Now Showing
          </Typography>
          <Typography variant="h7" noWrap component="div">
            Upcoming
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        <HomePage />
      </Box>
    </Box>
  );
}
