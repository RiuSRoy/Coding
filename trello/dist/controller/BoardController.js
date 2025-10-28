"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoardService_1 = require("../service/BoardService");
const ListController_1 = __importDefault(require("./ListController"));
class BoardController {
    constructor() {
        this.boards = {};
    }
    createBoard(name) {
        const boardService = new BoardService_1.BoardService();
        const board = boardService.createBoard(name);
        this.boards[board.id] = board;
        return board.id;
    }
    showBoard(boardId) {
        if (!this.boards[boardId]) {
            console.error(`Board ${boardId} not found`);
            return;
        }
        const board = this.boards[boardId];
        const lists = [];
        for (let listId of board.lists) {
            lists.push(ListController_1.default.lists[listId]);
        }
        board.lists = lists;
        console.log(board);
    }
    updateBoard(boardId, params) {
        for (const attr in params) {
            if (attr !== 'lists') {
                this.boards[boardId][attr] = params[attr];
            }
        }
    }
    show() {
        console.log(Object.values(this.boards));
    }
    addMemberToBoard(boardId, user) {
        this.boards[boardId].members.add(user);
    }
    removeMemberFromBoard(boardId, user) {
        this.boards[boardId].members.delete(user);
    }
    deleteBoard(boardId) {
        delete this.boards[boardId];
    }
}
exports.default = new BoardController();
