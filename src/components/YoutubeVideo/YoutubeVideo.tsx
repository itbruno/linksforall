import Image from 'next/image';
import { CircleNotch, PlayCircle, Spinner, StopCircle } from 'phosphor-react';
import { useState } from 'react';

interface YoutubeVideoProps {
  videoId: string;
  title: string;
}

function YoutubeVideo({ videoId, title = 'Youtube Video' }: YoutubeVideoProps) {
  const [playVideo, setPlayVideo] = useState(false);
  const [loading, setLoading] = useState(false);

  function getYoutubeVideoCover(videoId: string) {
    const imageUrl = 'https://i.ytimg.com/vi';
    const videoUrl = formatVideoUrl(videoId);

    const coverImage = `${imageUrl}/${videoUrl}/hq720.jpg`;
    return coverImage;
  }

  function formatVideoUrl(videoUrl: string) {
    if (videoUrl.includes('?v=')) {
      const getUrl = new URL(videoUrl);
      const getVideoIdParam = getUrl.searchParams.get('v');

      return getVideoIdParam;
    }

    return videoUrl;
  }

  const getUrlFormatted = formatVideoUrl(videoId);
  const youtubeCoverImage = getYoutubeVideoCover(videoId);

  return (
    <>
      {!playVideo && (
        <Image
          src={youtubeCoverImage}
          alt={title}
          width={500}
          height={300}
          className="object-cover  min-h-[300px] rounded-md"
          onClick={() => (setPlayVideo(true), setLoading(true))}
          key={getUrlFormatted}
        />
      )}

      {playVideo && (
        <div className="flex items-center justify-center max-h-[300] w-full">
          {loading && (
            <CircleNotch size={32} className="animate-spin absolute" />
          )}
          <iframe
            key={getUrlFormatted}
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${getUrlFormatted}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setLoading(false)}
            className="rounded-md z-10"
          />
        </div>
      )}

      <span className="flex px-2 w-full justify-between items-center">
        <div>{title}</div>
        {playVideo ? (
          <StopCircle
            onClick={() => (setPlayVideo(false), setLoading(false))}
            weight="duotone"
            size={28}
            className="cursor-pointer"
          />
        ) : (
          <PlayCircle
            onClick={() => (setPlayVideo(true), setLoading(true))}
            weight="duotone"
            size={28}
            className="cursor-pointer"
          />
        )}
      </span>
    </>
  );
}

export { YoutubeVideo };
