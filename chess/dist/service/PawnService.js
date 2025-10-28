"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PawnService = void 0;
const IPiece_1 = require("./IPiece");
class PawnService {
    move(startCell, endCell) {
    }
    getPieceCode() {
        return IPiece_1.PieceCode.PAWN;
    }
}
exports.PawnService = PawnService;
