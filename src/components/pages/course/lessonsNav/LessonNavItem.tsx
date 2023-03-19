import { Lesson } from '../../../../api/types';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

type Props = {
  courseId: string;
  lesson: Lesson;
};

const LessonNavItem = ({ courseId, lesson }: Props) => {
  const { id, order, previewImageLink, title } = lesson;
  const isLocked = lesson.status === "locked";

  return (
    <Box
      component={NavLink}
      to={`/course/${courseId}/lesson/${id}`}
      sx={[
        { textDecoration: 'none', color: 'inherit', pointerEvents: isLocked ? 'none' : 'auto' },
        (theme) => ({
          '&.active': {
            color: theme.palette.primary.main,
          },
        }),
      ]}
      key={id} >
      <ListItemButton disabled={isLocked} >
        <Box component="img" src={`${previewImageLink}/lesson-${order}.webp`} sx={{ maxWidth: 100, mr: 1 }} alt={lesson.title} />
        <ListItemText primary={title} secondary={isLocked ? 'locked' : null} />
      </ListItemButton >
    </Box >
  );
};

export default LessonNavItem;
