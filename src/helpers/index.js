const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const calculateWinner = lines => squares => {
  for (const [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
};

export const determineWinner = calculateWinner(lines);

export const isEven = number => number % 2 === 0;

export const acceptStringOrNull = (props, propName, componentName) => {
  const propValue = props[propName];

  if (propValue === null) return;
  if (typeof propValue === 'string') return;
  
  return new Error(`${componentName} only accepts null or string`);
};