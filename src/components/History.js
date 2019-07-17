import { linkEvent } from 'inferno';
import { array, func } from 'prop-types';
import StoryPoint from './StoryPoint';

const History = ({ history, jumpTo, startNewGame }) => {
  const renderStory = (_, step) => {
    const text = step
      ? `Go to step #${step}`
      : `To the beginning of the game`;

    return (
      <li
        className="history__item"
        key={step}
      >
        <StoryPoint
          {...{
            text,
            handleClick: linkEvent(step, jumpTo)
          }}
        />
      </li>
    );
  };

  return (
    <ul className="history">
      {history.map(renderStory)}
      {(history.length > 1) && (
        <li className="history__item">
          <StoryPoint
            {...{
              text: 'Start a new game',
              handleClick: linkEvent(null, startNewGame)
            }}
          />
        </li>
      )}
    </ul>
  );
};

History.propTypes = {
  history: array.isRequired,
  jumpTo: func.isRequired,
  startNewGame: func.isRequired,
};

export default History;