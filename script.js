// Select all video elements within the video container
const videos = document.querySelectorAll('.video-container video');

// Add event listeners to each video
videos.forEach(video => {
  video.addEventListener('play', () => {
    // Pause all other videos
    videos.forEach(otherVideo => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});
