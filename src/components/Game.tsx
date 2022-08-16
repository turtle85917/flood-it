import { Component } from "react";

import Status from "./Status";

import getBoard from "../utils/get-board";

import "../styles/game.component.css";

interface P {
  size: number;
}

interface S {
  board: Flood[];
  selectColor: Color | undefined;
  click: number;
  clear: boolean;
}

export default class Game extends Component<P, S> {
  constructor(props: P) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      board: getBoard(this.props.size),
      selectColor: undefined,
      click: 0, clear: false
    });
  }

  render() {
    return (
      <>
        {
          this.state?.board
          ? (<div
            className="game"
            style={{ gridTemplateColumns: `repeat(${this.props.size}, 5em)` }}
            >
            {
              this.state.board.map((tile, idx) => (
                <ul
                  className={["cell", tile.color].join(" ")}
                  onClick={() => {
                    const beforeColor = this.state.board[0].color;

                    this.setState({
                        board: this.state.board.map(($tile, $idx) => {
                          if ($idx === 0) $tile.color = tile.color;
                          return $tile;
                        }),
                      selectColor: tile.color,
                      click: this.state.click + (this.state.clear ? 0 : 1)
                    }, () => {
                      const { size } = this.props;
                      const { board, selectColor } = this.state;
                      const queue: Position[] = [{ idx: 0 }]; // first tile.

                      for (let index = 0; index < size ** 2; index++) {
                        if (board[index].color === beforeColor && queue.filter(q => [-1, 1, size * -1, size].includes(q.idx - index)).length) {
                          queue.push({ idx: index });
                        }
                      }

                      this.setState({
                        board: board.map(($tile, $idx) => {
                          if (queue.find(qu => qu.idx === $idx)) {
                            $tile.color = selectColor!;
                          }

                          return $tile;
                        })
                      }, () => {
                        const { board, selectColor } = this.state;
                        this.setState({ clear: board.every(tile => tile.color === selectColor) });
                      });
                    })
                  }}
                  key={idx}
                  />
              ))
            }
          </div>)
          : (<>Loading...</>)
        }
        <Status
          size={this.props.size}
          color={this.state?.selectColor || this.state?.board[0].color}
          click={this.state?.click || 0}
          clear={this.state?.clear || false}
          />
      </>
    );
  };
};