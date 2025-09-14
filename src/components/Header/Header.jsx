import styles from "./Header.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = (props) => {
  const drawerWidth = 240;
  const navItems = ["about", "features", "products", "calculators", "contact", "sustainability"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const location = useLocation();
  console.log(location);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} href={`${item}`} /> */}
              <Button key={item} sx={{ color: location.hash === `#${item}` || location.pathname === `/${item}` ? "red" : "black" }} href={item === "sustainability" ? "/sustainability" : `/home#${item}`}>
                {item}
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, color: "#000", display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.navBarLogo} component="div" sx={{ flexGrow: 1, textAlign: "left", display: { sm: "block" } }}>
            <a href="#heroSection">
              Infinity <span>by Greener Edge Labs</span>
            </a>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: location.hash === `#${item}` || location.pathname === `/${item}` ? "red" : "black" }} href={item === "sustainability" ? "/sustainability" : `/home#${item}`}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
