"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const Board_1 = require("../models/Board");
const CommonUtils_1 = require("../utils/CommonUtils");
class BoardService {
    createBoard(name) {
        const id = (0, CommonUtils_1.getRandomId)();
        const board = {
            id,
            name,
            privacy: Board_1.PrivacyType.PUBLIC,
            url: `/board/${id}`,
            lists: [],
            members: new Set()
        };
        return board;
    }
}
exports.BoardService = BoardService;
