"use client";
import { Box, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";

const Education = () => {
  return (
    <Box id="education" sx={{ paddingTop: "64px", padding: "20px" }}>
      <Navbar />
      <Typography variant="h4" textAlign="center">
        Education
      </Typography>
      <Typography variant="h6">Institution Name</Typography>
      <Typography variant="body1">
        Bachelor of Science in Computer Science
      </Typography>
      <Typography variant="caption">Years Attended: 2018 - 2022</Typography>
      {/* Add more education details as needed */}
    </Box>
  );
};

export default Education;
