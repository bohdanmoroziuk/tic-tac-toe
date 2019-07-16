import { linkEvent } from 'inferno';
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

export default Board;