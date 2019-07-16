import { linkEvent } from 'inferno';
import { array, func } from 'prop-types';
import Square from './Square';

const Board = ({ squares, makeStep }) => {
  const renderSquare = (player, index) => (
    <Square
      {...{
        key: index,
        value: player,
        onClick: linkEvent(index, makeStep),
      }}
    />
  );

  return (
    <div className="board">
      {squares.map(renderSquare)}
    </div>
  );
};

Board.propTypes = {
  squares: array.isRequired,
  makeStep: func.isRequired,
};

export default Board;