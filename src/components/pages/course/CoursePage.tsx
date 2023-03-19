import { Alert, Box, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getCourse } from "../../../api/previewCoursesApi";
import { useTitle } from "../../common/hooks";
import LessonsNav from "./lessonsNav/LessonsNav";
import CourseDetails from "./CourseDetails";
import CourseVideo from "./CourseVideo";
import { useEffect, useMemo } from 'react';
import { Lesson } from "../../../api/types";
import Loader from "../../common/Loader";

const CoursePage = () => {
  const { courseId, lessonId } = useParams();
  const { data, isLoading, isSuccess, isError } = useQuery(["course", courseId], () => getCourse(courseId!), { cacheTime: 60_000 });
  const lesson = useLesson(courseId!, lessonId, data?.lessons);
  const navigate = useNavigate();

  useEffect(() => {
    if (!lessonId && lesson) {
      navigate(`/course/${courseId}/lesson/${lesson.id}`);
    }
  }, [courseId, lesson, lessonId, navigate]);

  useTitle(isSuccess ? `${data?.title} | ${lesson?.title}` : 'Course');

  return (
    <Box>
      <Grid container spacing={1}>
        {isError && (
          <Grid item xs={12} >
            <Alert severity="error">Error. Something went wrong</Alert>
          </Grid>
        )}
        <Grid item xs={12} md={9}>
          {isLoading && (
            <Loader />
          )}
          {isSuccess && (
            <>
              {lesson!.link && (
                <CourseVideo lesson={lesson!} />
              )}
              <CourseDetails course={data} />
            </>
          )}
        </Grid>
        <Grid item xs={12} md={3} order={{ md: 2, xs: 3 }}>
          <LessonsNav courseId={courseId!} lessons={data?.lessons} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoursePage;

function getLessonIdKey(courseId: string) {
  return `course-lesson-${courseId}`
};

function useLesson(courseId: string, lessonId: string | undefined, lessons: Lesson[] | undefined) {
  const lesson = useMemo(() => {
    if (lessons === undefined || lessons.length === 0)
      return undefined;

    if (lessonId) {
      return lessons.find(lesson => lesson.id === lessonId);
    } else {
      const key = getLessonIdKey(courseId);
      const lessonIdLocal = localStorage[key];
      return lessonIdLocal ? lessons.find(lesson => lesson.id === lessonIdLocal) : lessons.find(lesson => lesson.status === 'unlocked');
    }
  }, [courseId, lessonId, lessons]);

  useEffect(() => {
    if (lesson && courseId) {
      const key = getLessonIdKey(courseId);
      localStorage[key] = lesson.id;
    }
  }, [courseId, lesson]);

  return lesson;
}
