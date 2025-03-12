import React from "react";
import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "dark" ? "grey.900" : "primary.main",
        color: "white",
        py: 3,
        mt: 4,
      })}
    >
      <Container>
        <Typography variant="body1" align="center" gutterBottom>
          &copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.
        </Typography>
        
        {/* Social Icons */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={1}>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
