import classnames from 'classnames';
import { string, func } from 'prop-types';
import Button from './Button';

const StoryPoint = ({ text, isActive, handleClick }) => (
  <Button
    className={
      classnames(
        'story-point button button--is-block', { 
          'button--is-active': isActive 
        }
      )
    }
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