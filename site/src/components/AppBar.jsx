import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bakery
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button component="a" href={item.href} key={item.label}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar elevation={0} position="sticky" sx={{ backgroundColor: 'var(--color-header-bg)', color: 'var(--color-header-text)' }} >
        <Stack sx={{ alignItems: "center" }}>
          {/* Logo */}
          <Box
            component="img"
            src="/logo-cropped.png"
            alt="Bakery Logo"
            sx={{
                maxHeight: 200,
              objectFit: 'contain',
            }}
          />

<Stack direction="row">
          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Typography
                component="a"
                href={item.href}
                key={item.label}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  p: 2,
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          </Stack>
</Stack>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // better performance on mobile
      >
        {drawer}
      </Drawer>
    </>
  );
}