const Video = () => {
  return (
    <div className="bg-[#131313]">
      <video loop autoPlay muted playsInline aria-label="Video Player" className="w-full h-full">
        <source src="https://player.vimeo.com/progressive_redirect/playback/1074096863/rendition/1080p/file.mp4?loc=external&log_user=0&signature=355b470bc5ae6d1a65af60aa0f8e522743153303c843f0dde07d2080219460e8" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;