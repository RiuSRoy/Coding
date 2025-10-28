import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Color, PieceType } from "../models/Piece";
import { PieceCode } from "../service/IPiece";
import { PieceFactory } from "../service/PieceFactory";

export class GameController {

    board: Board;
    constructor(size: number) {
        this.board = initializeBoard(size);
    }

    move(startCell: Cell, endCell: Cell) {
        const pieceFactory = new PieceFactory();
        const pieceService = pieceFactory.getPieceService(startCell);
        if (!pieceService) {
            console.log("Start Cell is empty!");
            return;
        }
        const currentTurn = this.board.turn;
        if (startCell.currentPiece?.color !== currentTurn) {
            console.log(`Not your turn. ${currentTurn} should make the move now!`);
        }
        if (pieceService.isMovePossible(startCell, endCell)) {
            pieceService.move(startCell, endCell);

            this.board.turn = currentTurn === "BLACK" ? "WHITE" : "BLACK";
        } else {
            console.log("Invalid Move");
        }
    }
}


function initializeBoard(size: number): Board {

    let cells: Cell[][] = [];
    for (let i = 1; i <= size; i++) {
        let row: Cell[] = [];
        for (let j = 1; j <= size; ++j) {
            let cell: Cell = {
                x: j,
                y: i,
            }
            if (i == 2 || i == size-1) {
                cell.currentPiece = {
                    color: i == 2 ? "BLACK" : "WHITE",
                    pieceType: "PAWN"
                }
            } else if (i == 1 || i == size) {
                let color: Color = i == 1 ? "BLACK" : "WHITE"
                let pieceType: PieceType = "KING";
                if (j == 1 || j == size) {
                    pieceType = "ROOK"
                } else if (j == 2 || j == size-1) {
                    pieceType = "KNIGHT"
                } else if (j == 3 || j == size-2) {
                    pieceType = "BISHOP"
                } else if (j == 4) {
                    pieceType = "QUEEN"
                }
                cell.currentPiece = {
                    color,
                    pieceType
                }
            }
            row.push(cell);
        }
        cells.push(row);
    }
    const board: Board = {
        boardSize: size,
        cells,
        turn: "WHITE"
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; ++j) {
            if (!cells[i][j].currentPiece) {
                process.stdout.write("-  ");
            } else {
                const curPiece = cells[i][j].currentPiece;
                const colorCode = curPiece?.color === "BLACK" ? "B" : "W";
                process.stdout.write(colorCode + PieceCode[curPiece!.pieceType] + " ")
            }
        }
        console.log() // Move to the next line after each row
    }
    return board;
}
