export class GameBoard {
    public order!: number;

    public subboards!: GameBoard[];

    private _picked?: 'X' | 'O';

    public get picked() {
        return this._picked;
    }

    public constructor(order?: number) {
        if (order == null) return;

        this.order = order;

        if (order === 0) {
            return;
        } else {
            this.subboards = Array(9).fill(null).map(_ => new GameBoard(order - 1));
        }
    }

    public copy(): GameBoard {
        const result = new GameBoard();
        result.order = this.order;
        result._picked = this._picked;

        if (this.order === 0) {
            return result;
        } else {
            result.subboards = this.subboards.map(item => item.copy());
            return result;
        }
    }
}
