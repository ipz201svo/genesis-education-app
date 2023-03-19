import { Card, CardActionArea, Grid } from "@mui/material";
import { CourseBrief } from "../../../../api/types";
import CourseTileMedia from "./CourseTileMedia";
import CourseTileContent from "./CourseTileContent";
import { Link } from "react-router-dom";
import { Link as MuiLink } from '@mui/material';

type Props = {
  course: CourseBrief;
};

const CourseTile = ({ course }: Props) => {

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <MuiLink component={Link} to={`/course/${course.id}`} sx={{ textDecoration: 'none' }} >
        <CardActionArea>
          <Grid container>
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CourseTileMedia
                courseTitle={course.title}
                previewImageLink={course.previewImageLink}
                courseVideoPreview={'courseVideoPreview' in course.meta ? course.meta.courseVideoPreview : undefined}
              />
            </Grid>
            <Grid item xs={9}>
              <CourseTileContent course={course} />
            </Grid>
          </Grid>
        </CardActionArea>
      </MuiLink>
    </Card>
  );
};

export default CourseTile;
