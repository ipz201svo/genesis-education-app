import { CardContent, Typography, Stack, Chip } from "@mui/material";
import Rating from "../../../common/Rating";
import { CourseProps, getProps } from "../../../course";
import { CourseBrief } from "../../../../api/types";

type Props = {
  course: CourseBrief;
};

const CourseTileContent = ({ course }: Props) => {
  const { title, description, rating, tags } = course;
  const courseProps = getProps(course);

  return (
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom color="text.primary" variant="h5" component="h2">
        {title}
      </Typography>
      <Typography color="text.primary">
        {description}
      </Typography>
      <Rating rating={rating} />
      <CourseProps props={courseProps} />
      <Stack direction="row" spacing={1} mt={1}>
        {tags.map(tag => <Chip key={tag} label={tag} />)}
      </Stack>
    </CardContent>
  );
};

export default CourseTileContent;
