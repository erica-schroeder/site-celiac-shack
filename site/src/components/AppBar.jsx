import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Offerings", href: "/offerings" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", minWidth: 150 }}>
      <List>
        {navItems.map((item) => (
          <ListItem button component="a" href={item.href} key={item.label}>
            <ListItemText primaryTypographyProps={{fontFamily: 'var(--font-heading)' }} primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

    const Logo = ({ sx, ...props }) => (
        <a href="/">
            <Box
                component="img"
                src="/logo-cropped.png"
                alt="Logo"
                sx={{
                    pt: 1,
                    maxHeight: 150,
                    objectFit: 'contain',
                    ...sx,
                }}
                {...props}
            />
        </a>
    );

    return (
        <>
            <AppBar elevation={0} position="sticky" sx={{ backgroundColor: 'var(--color-header-bg)', color: 'var(--color-header-text)' }} >

                {/* Desktop App Bar */}
                <Stack sx={{ display: { xs: "none", sm: "flex"}, alignItems: "center" }}>
                    <Logo />

                    <Stack direction="row" alignItems="center">
                        {navItems.map((item, idx) => (
                            <>
                            <Typography
                                component="a"
                                href={item.href}
                                key={item.label}
                                sx={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    fontFamily: 'var(--font-heading)',
                                    p: 2,
                                }}
                            >
                                {item.label}
                            </Typography>
                            {idx < navItems.length - 1 &&
                            <Typography sx={{ color: 'var(--color-header-accent)' }}>|</Typography>}
</>
                        ))}
                    </Stack>
                </Stack>


                {/* Mobile App Bar */}
                <Stack direction="row" sx={{ alignItems: "center", px: 4, display: { xs: "flex", sm: "none" }, justifyContent: "space-between"}}>
                    <Logo />

                    {/* Mobile menu button */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: "none" } }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
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