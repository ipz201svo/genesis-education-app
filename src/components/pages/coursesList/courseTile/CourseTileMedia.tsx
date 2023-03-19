import { Box, CardMedia } from "@mui/material";
import { useState } from "react";
import VideoHls from "../../../common/VideoHls";

type Props = {
  courseTitle: string;
  previewImageLink: string;
  courseVideoPreview?: {
    link: string;
    duration: number;
    previewImageLink: string;
  } | undefined;
};

const CourseTileMedia = ({ previewImageLink, courseVideoPreview, courseTitle }: Props) => {
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const mouseOverHandler = () => courseVideoPreview && setMediaType('video');
  const mouseOutHandler = () => setMediaType('image');

  return (
    <Box onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
      {mediaType === 'image' && (
        <CardMedia
          component="img"
          image={previewImageLink + '/cover.webp'}
          alt={`${courseTitle} course preview image`}
        />
      )}
      {mediaType === 'video' && courseVideoPreview?.link && (
        <VideoHls src={courseVideoPreview?.link} autoPlay muted />
      )}
    </Box>
  );
};

export default CourseTileMedia;
