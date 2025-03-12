import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useAppSelector } from "@/store";
import AppRoutes from "@/routes/route"; // Import the separate routes component

const App: React.FC = () => {
  const themeMode = useAppSelector((state) => state.settings.theme.theme);

  const theme = createTheme({
    palette: {
      mode: themeMode, // Dynamically apply theme
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRoutes /> {/* Use the separate AppRoutes component */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
