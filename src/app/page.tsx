// src/app/page.tsx
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      <Navbar />
      <Box sx={{ paddingTop: "64px", textAlign: "center" }}>
        <Typography variant="h2" sx={{ margin: "20px 0", fontWeight: "bold" }}>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "40px" }}>
          I’m Sushmita Thapa Magar, a Frontend Developer & UI Enthusiast.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: "10px" }}
          href="#projects"
        >
          View My Projects
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ margin: "10px" }}
          href="#contact"
        >
          Contact Me
        </Button>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        sx={{ padding: "40px", backgroundColor: "#e0e0e0", marginTop: "20px" }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
          My Projects
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "10px" }}
        >
          Here are some of the projects I've worked on:
        </Typography>
        {/* Project examples (replace with actual content) */}
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Box
            sx={{
              width: "300px",
              margin: "10px",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h6">Project 1</Typography>
            <Typography variant="body2">Description of project 1.</Typography>
          </Box>
          <Box
            sx={{
              width: "300px",
              margin: "10px",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h6">Project 2</Typography>
            <Typography variant="body2">Description of project 2.</Typography>
          </Box>
          {/* Add more project boxes as needed */}
        </Box>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{ padding: "40px", backgroundColor: "#f5f5f5", marginTop: "20px" }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: "20px" }}>
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ marginBottom: "10px" }}
        >
          Feel free to reach out for collaborations or inquiries!
        </Typography>
        <Button variant="contained" color="secondary" href="/contact">
          Get in Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Main;
