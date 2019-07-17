import { Component } from 'inferno';

import Board from './components/Board';
import Button from './components/Button';
import Status from './components/Status';
import History from './components/History';

import { determineWinner, isEven } from './helpers';

/**
 * TODO:
 *  2. Add the ability to choose a player
 *  4. Highlight winning squares
 *  5. Refactor code
 */
export default class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    step: 0,
    xIsNext: true,
  }

  get nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  jumpTo = (step) => {
    this.setState({
      step,
      xIsNext: isEven(step),
    });
  }

  startNewGame = () => {
    window.location.reload();
  };

  makeStep = (squareIndex) => {
    const { history, step, xIsNext } = this.state;

    const currentHistory = history.slice(0, step + 1);
    const currentSquares = currentHistory[currentHistory.length - 1].squares;

    if (determineWinner(currentSquares) || currentSquares[squareIndex]) {
      return;
    }

    const nextSquares = currentSquares.map((player, index) => (
      index === squareIndex
        ? this.nextPlayer
        : player
    ));

    this.setState({
      xIsNext: !xIsNext,
      step: currentHistory.length,
      history: [ ...currentHistory, { squares: nextSquares } ]
    });
  }

  render() {
    const { history, step } = this.state;

    const currentHistory = history[step];
    const { squares } = currentHistory;

    const winner = determineWinner(squares);

    const text = winner 
      ? `Win: ${winner}`
      : `Next player: ${this.nextPlayer}`;

    return (
      <div className="game">
        <div className="game__section game__board">
          <Board
            {...{
              squares,
              makeStep: this.makeStep
            }}
          />
        </div>
        <div className="game__section game__info">
          <Status {...{text}} />
          <History 
            {...{
              history,
              jumpTo: this.jumpTo,
              startNewGame: this.startNewGame
            }}
          />
        </div>
      </div>
    );
  };
}