import React from 'react';
import './Game.scss';
import { GameBoard } from "../Board/GameBoard";
import Board from "../Board/Board";


interface GameState {
    board: GameBoard;
}

class Game extends React.Component<{}, GameState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            board: new GameBoard(2)
        }
    }

    public render() {
        return <div className="game">
            <Board board={this.state.board}/>
        </div>;
    }
}

export default Game;
