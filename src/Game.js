import { Component } from 'inferno';

import Board from './components/Board';
import Info from './components/Info';

export default class Game extends Component {
  state = {
    scale: 9,
  }

  render() {
    const { scale } = this.state;

    return (
      <div className="game">
        <div className="game__board">
          <Board {...{scale}} />
        </div>
        <div className="game__info">
          <Info />
        </div>
      </div>
    );
  };
}