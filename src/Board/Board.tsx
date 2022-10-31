import { GameBoard } from "./GameBoard";
import './Board.scss';

interface BoardProps {
    board: GameBoard;
    onClick: (data: number[]) => void;
}

function Board(props: BoardProps) {
    const board = props.board;

    if (board.order > 0) {

        return (<div
            className={`game-board game-board--order-${board.order}`} {...{
            active: board.isActive ? 'true' : 'false',
            picked: board.picked
        }}>
            {board.subboards.map((item, index) => <Board key={index}
                                                         board={item}
                                                         onClick={(data) => board.isActive && props.onClick(data.concat(index))}
            />)}
        </div>)
    } else {
        return <div
            className="game-board__cell" {...{picked: board.picked}}
            onClick={() => props.onClick([])}> {props.board.picked} </div>
    }
}

export default Board;
