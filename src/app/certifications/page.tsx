"use client";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const Certifications = () => {
  return (
    <Box id="certifications" sx={{ paddingTop: "64px", padding: "20px" }}>
      <Navbar />
      <Typography variant="h4" textAlign="center">
        Certifications
      </Typography>
      <Typography variant="h6">Certified Frontend Developer</Typography>
      <Typography variant="body1">Issuing Organization: Coursera</Typography>
      <Typography variant="caption">Date of Completion: Jan 2023</Typography>
      {/* Add more certifications as needed */}
    </Box>
  );
};

export default Certifications;
