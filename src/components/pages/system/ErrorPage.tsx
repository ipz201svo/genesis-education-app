import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        Something went wrong
      </Typography>
    </Box>
  );
};

export default ErrorPage;
