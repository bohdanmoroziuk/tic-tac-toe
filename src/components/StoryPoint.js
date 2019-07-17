import { string, func } from 'prop-types';
import Button from './Button';

const StoryPoint = ({ text, handleClick }) => (
  <Button
    className="story-point button button--is-block"
    onClick={handleClick}
  >
    {text}
  </Button>
);

StoryPoint.propTypes = {
  text: string.isRequired,
  handleClick: func.isRequired,
};

export default StoryPoint;