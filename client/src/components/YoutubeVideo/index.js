import PropTypes from "prop-types";

function YoutubeVideo({embedId}) {
  return (
    <div className="hall-page-video-container">
      <iframe 
        className="hall-page-video"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
};

YoutubeVideo.propTypes = {
  embedId: PropTypes.string.isRequired
}

export default YoutubeVideo;