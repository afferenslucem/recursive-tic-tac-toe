import React from 'react';
import './Game.scss';
import { GameBoard } from "../Board/GameBoard";
import Board from "../Board/Board";


interface GameState {
    board: GameBoard;
    isXNext: boolean;
}

class Game extends React.Component<{}, GameState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            board: new GameBoard(2),
            isXNext: true,
        }

        this.handleStep = this.handleStep.bind(this);
    }

    public render() {
        return <div className="game">
            <Board board={this.state.board} onClick={this.handleStep}/>
        </div>;
    }

    public handleStep(coords: number[]): void {
        let board = this.state.board;
        board = board.step(this.state.isXNext ? 'X' : 'O', coords);

        this.setState({
            board,
            isXNext: !this.state.isXNext,
        })
    }
}

export default Game;
