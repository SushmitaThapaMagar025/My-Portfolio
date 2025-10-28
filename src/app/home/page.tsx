// src/app/page.tsx
"use client";
import { Box, Button, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        paddingTop: "64px",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Hi, I’m Sushmita Thapa Magar — Frontend Developer & UI Enthusiast.
      </Typography>
      <img
        src="/images/profile.jpg"
        alt="Profile"
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
      />
      <Typography variant="body1" sx={{ margin: "20px" }}>
        Passionate about creating beautiful and functional web applications.
      </Typography>
      <Button variant="contained" color="primary" sx={{ margin: "10px" }}>
        View My Work
      </Button>
      <Button variant="outlined" color="secondary">
        Download Resume
      </Button>
    </Box>
  );
};

export default Home;
