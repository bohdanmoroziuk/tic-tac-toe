import Square from './Square';

const Board = ({ scale }) => {
  const renderSquare = (index) => (
    <Square key={index} value={index + 1} />
  );

  return (
    <div className="board">
      {[...new Array(scale)].map((_, index) => (
        renderSquare(index)
      ))}
    </div>
  );
};

export default Board;