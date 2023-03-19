import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
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
        Page not found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
