import { string, func } from 'prop-types';

const StoryPoint = ({ text, handleClick }) => (
  <div
    className="story-point"
    onClick={handleClick}
  >
    <p className="story-point__text">
      {text}
    </p>
  </div>
);

StoryPoint.propTypes = {
  text: string.isRequired,
  handleClick: func.isRequired,
};

export default StoryPoint;