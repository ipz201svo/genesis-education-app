import { Box, Typography, List } from '@mui/material';
import { Lesson } from '../../../../api/types';
import LessonNavItem from './LessonNavItem';
import Loader from '../../../common/Loader';

type Props = {
  courseId: string;
  lessons: Lesson[] | undefined;
  isLoading: boolean;
};

const LessonsNav = ({ lessons, courseId, isLoading }: Props) => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto' }}>
      <Box sx={{ px: 2 }}>
        <Typography variant="h5" component="h3">Lessons</Typography>
      </Box>
      {isLoading && (
        <Loader />
      )}
      <List component="nav">
        {lessons?.map(lesson => <LessonNavItem
          key={lesson.id}
          courseId={courseId}
          lesson={lesson}
        />)}
      </List>
    </Box>
  );
};

export default LessonsNav;
