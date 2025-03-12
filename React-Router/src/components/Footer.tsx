import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        mt: 4,
      }}
    >
      <Container>
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
