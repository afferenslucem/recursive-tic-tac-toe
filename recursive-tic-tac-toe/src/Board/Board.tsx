import { GameBoard } from "./GameBoard";
import './Board.scss';

interface BoardProps {
    board: GameBoard;
}

function Board(props: BoardProps) {
    if (props.board.order > 0) {
        return (<div className="game-board"> {props.board.subboards.map((item, index) => <Board key={index}
                                                                                                board={item}/>)} </div>)
    } else {
        return <div className="game-board__cell"> X </div>
    }
}

export default Board;
