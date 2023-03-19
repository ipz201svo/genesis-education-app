import { Course, CourseBrief } from "../../api/types";

export const getProps = (course: Course | CourseBrief): string[] => {
  let lessonsCount;
  if ('lessonsCount' in course)
    lessonsCount = course.lessonsCount;
  else
    lessonsCount = course.lessons.length;

  return [
    `${Math.floor(course.duration / 60)} min total`,
    `${lessonsCount} lessons`
  ];
}