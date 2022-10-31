export class GameBoard {
    public order!: number;

    public subboards!: GameBoard[];

    public isActive = true;

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

    public step(player: 'X' | 'O', coords: number[]): GameBoard {
        const copy = this.copy();

        const rCoords = Array.from(coords).reverse();

        copy.activateAll();
        copy.stepInto(player, rCoords);

        return copy;
    }

    private activateAll(): void {
        if (this.subboards == null) {
            this.isActive = true;

            return;
        }

        this.subboards.forEach(item => item.activateAll());
    }

    private stepInto(player: 'X' | 'O', coords: number[]) {
        if (coords.length > 1) {
            const nextBoard = coords[1];

            this.subboards.forEach((board, index) => {
                if (index != nextBoard) {
                    board.isActive = false;
                } else {
                    board.isActive = true;
                }
            })

            this.subboards[coords[0]].stepInto(player, coords.slice(1));
        } else {
            this.subboards[coords[0]]._picked ??= player
        }
    }
}
