import Square from './Square';

const Board = ({ squares, makeStep }) => {
  const renderSquare = (player, index) => {
    const onClick = () => makeStep(index);

    return (
      <Square
        {...{
          key: index,
          value: player,
          onClick,
        }}
      />
    );
  };

  return (
    <div className="board">
      {squares.map(renderSquare)}
    </div>
  );
};

export default Board;