import { Box, Typography } from "@mui/material";
import { Course } from "../../../api/types";
import Rating from "../../common/Rating";
import { CourseProps, getProps } from "../../course";

type Props = {
  course: Course;
};

const CourseDetails = ({ course }: Props) => {
  const { title, description, rating } = course;

  const props = getProps(course);

  return (
    <Box sx={{ px: 2, mt: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>{title}</Typography>
      <Typography variant="h5" component="h2" gutterBottom>{description}</Typography>
      <Rating rating={rating} />
      <CourseProps props={props} />
    </Box>
  );
};

export default CourseDetails;
