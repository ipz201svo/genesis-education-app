import { CardMedia } from '@mui/material';
import Hls from 'hls.js';
import { useEffect, useRef } from 'react'

type Props = {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
};

const CourseTileVideo = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { src } = props;

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
      }
      else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      }
    }
  }, [src]);

  return (
    <CardMedia
      component="video"
      ref={videoRef}
      {...props}
    />
  );
};

export default CourseTileVideo;
