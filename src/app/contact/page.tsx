"use client";
import { Box, Typography, TextField, Button } from "@mui/material";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <Box id="contact" sx={{ paddingTop: "64px", padding: "20px" }}>
      <Navbar />
      <Typography variant="h4" textAlign="center">
        Contact Me
      </Typography>
      <form>
        <TextField label="Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
