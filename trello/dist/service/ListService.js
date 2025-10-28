"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListService = void 0;
const CommonUtils_1 = require("../utils/CommonUtils");
class ListService {
    createList(boardId, name) {
        const id = (0, CommonUtils_1.getRandomId)();
        const list = {
            id,
            name,
            boardId,
            cards: new Set()
        };
        return list;
    }
}
exports.ListService = ListService;
