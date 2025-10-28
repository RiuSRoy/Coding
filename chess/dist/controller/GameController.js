"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const IPiece_1 = require("../service/IPiece");
class GameController {
    constructor(size) {
        this.board = initializeBoard(size);
    }
}
exports.GameController = GameController;
function initializeBoard(size) {
    let cells = [];
    for (let i = 1; i <= size; i++) {
        let row = [];
        for (let j = 1; j <= size; ++j) {
            let cell = {
                x: j,
                y: i,
            };
            if (i == 2 || i == size - 1) {
                cell.currentPiece = {
                    color: i == 2 ? "BLACK" : "WHITE",
                    pieceType: "PAWN"
                };
            }
            else if (i == 1 || i == size) {
                let color = i == 1 ? "BLACK" : "WHITE";
                let pieceType = "KING";
                if (j == 1 || j == size) {
                    pieceType = "ROOK";
                }
                else if (j == 2 || j == size - 1) {
                    pieceType = "KNIGHT";
                }
                else if (j == 3 || j == size - 2) {
                    pieceType = "BISHOP";
                }
                else if (j == 4) {
                    pieceType = "QUEEN";
                }
                cell.currentPiece = {
                    color,
                    pieceType
                };
            }
            row.push(cell);
        }
        cells.push(row);
    }
    const board = {
        boardSize: size,
        cells
    };
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; ++j) {
            // console.log(i + " " + j + JSON.stringify(cells[i][j]))
            if (!cells[i][j].currentPiece) {
                process.stdout.write("-  ");
            }
            else {
                const curPiece = cells[i][j].currentPiece;
                const colorCode = (curPiece === null || curPiece === void 0 ? void 0 : curPiece.color) === "BLACK" ? "B" : "W";
                process.stdout.write(colorCode + IPiece_1.PieceCode[curPiece.pieceType] + " ");
            }
        }
        console.log();
    }
    return board;
}
