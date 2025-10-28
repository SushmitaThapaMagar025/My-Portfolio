"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {[
            "home",
            "projects",
            "education",
            "experience",
            "certifications",
            "contact",
          ].map((section) => (
            <Link key={section} href={`/${section}`} passHref>
              <Button color="inherit">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
