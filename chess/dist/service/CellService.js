"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellService = void 0;
class CellService {
    isCellFree(cell) {
        if (!cell.currentPiece) {
            return true;
        }
        return false;
    }
}
exports.CellService = CellService;
