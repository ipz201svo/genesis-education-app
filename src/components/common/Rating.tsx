import { Box, Typography, Rating as MuiRating } from "@mui/material";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <Box mt={1} sx={{ display: "flex" }}>
      <Typography sx={{ fontWeight: "bold", color: '#b4690e', mr: 1 }}>
        {rating}
      </Typography>
      <MuiRating value={rating} precision={0.1} readOnly />
    </Box>
  );
};

export default Rating;
