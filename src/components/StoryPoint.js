import { string, func } from 'prop-types';

const StoryPoint = ({ description, handleClick }) => (
  <div
    className="story-point"
    onClick={handleClick}
  >
    <p className="story-point__description">
      {description}
    </p>
  </div>
);

StoryPoint.propTypes = {
  description: string.isRequired,
  handleClick: func.isRequired,
};

export default StoryPoint;