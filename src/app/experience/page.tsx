"use client";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const Experience = () => {
  return (
    <Box id="experience" sx={{ paddingTop: "64px", padding: "20px" }}>
      <Navbar />
      <Typography variant="h4" textAlign="center">
        Experience
      </Typography>
      <Typography variant="h6">Frontend Developer at Company XYZ</Typography>
      <Typography variant="body1">Duration: Jan 2022 - Present</Typography>
      <Typography variant="body2">
        Responsibilities: Developed user-friendly interfaces, optimized
        performance.
      </Typography>
      {/* Add more experience details as needed */}
    </Box>
  );
};

export default Experience;
