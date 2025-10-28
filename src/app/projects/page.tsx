"use client";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Navbar from "../../components/Navbar";

const Projects = () => {
  const projectList = [
    {
      title: "HRM Onboarding System",
      role: "Frontend Developer",
      description:
        "A web application for managing employee onboarding processes.",
      tech: "React, Next.js, Tailwind",
      demoLink: "#",
      githubLink: "#",
    },
    // Add more projects here
  ];

  return (
    <Box id="projects" sx={{ paddingTop: "64px", padding: "20px" }}>
      <Navbar />
      <Typography variant="h4" textAlign="center">
        Projects
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {projectList.map((project) => (
          <Card key={project.title} sx={{ margin: "20px", width: "300px" }}>
            <CardContent>
              <Typography variant="h5">
                {project.title} - {project.role}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
              <Typography variant="caption">
                Technologies: {project.tech}
              </Typography>
              <Button
                href={project.demoLink}
                variant="contained"
                color="primary"
                sx={{ margin: "5px" }}
              >
                Live Demo
              </Button>
              <Button
                href={project.githubLink}
                variant="outlined"
                color="secondary"
                sx={{ margin: "5px" }}
              >
                GitHub
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
