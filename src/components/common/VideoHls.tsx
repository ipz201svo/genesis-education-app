import { CardMedia } from '@mui/material';
import Hls from 'hls.js';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

type Props = {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  onTimeUpdate?: () => void;
};

const VideoHls = forwardRef<HTMLVideoElement, Props>((props: Props, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { src } = props;

  useImperativeHandle(ref, () => videoRef.current!, [videoRef]);

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
});

export default VideoHls;
