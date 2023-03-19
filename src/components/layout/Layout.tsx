import { Box, CssBaseline, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const theme = createTheme();

const Layout = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component='main' sx={{ pt: 2 }}>
          <Outlet />
        </Box>
        <Box sx={{ bgcolor: 'background.paper', p: 3, mt: 'auto' }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Education App
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Online lessons for everyone
          </Typography>
        </Box>
      </Box>
    </ThemeProvider >
  );
};

export default Layout;
