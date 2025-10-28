"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueenServer = void 0;
const IPiece_1 = require("./IPiece");
class QueenServer {
    getPieceCode() {
        return IPiece_1.PieceCode.QUEEN;
    }
    move(startCell, endCell) {
        throw new Error("Method not implemented.");
    }
}
exports.QueenServer = QueenServer;
