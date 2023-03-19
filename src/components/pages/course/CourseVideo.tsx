import { useEffect, useRef } from "react";
import VideoHls from "../../common/VideoHls";
import { Lesson } from "../../../api/types";

type Props = {
  lesson: Lesson;
};

const CourseVideo = ({ lesson }: Props) => {
  const { link, id } = lesson;
  const videoRef = useRef<HTMLVideoElement>(null);
  const key = getLessonTimeKey(id);

  const handleTimeUpdate = () => {
    localStorage[key] = videoRef.current?.currentTime;
  };

  useEffect(() => {
    const video = videoRef.current;
    const currentTime = +localStorage[key];
    const isSetTime = currentTime && video && video.duration !== currentTime;

    if (isSetTime)
      video.currentTime = currentTime;
  }, [key]);

  return (
    <VideoHls src={link!} ref={videoRef} onTimeUpdate={handleTimeUpdate} controls />
  );
};

export default CourseVideo;

function getLessonTimeKey(lessonId: string) {
  return `lesson-time-${lessonId}`;
}
