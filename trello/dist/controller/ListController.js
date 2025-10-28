"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListService_1 = require("../service/ListService");
const BoardController_1 = __importDefault(require("./BoardController"));
class ListController {
    constructor() {
        this.lists = {};
    }
    createList(boardId, name) {
        const listService = new ListService_1.ListService();
        const list = listService.createList(boardId, name);
        console.log(`Created list: ${list.id}`);
        this.lists[list.id] = list;
        BoardController_1.default.boards[boardId].lists.push(list.id);
        return list;
    }
    showList(listId) {
        console.log(this.lists[listId]);
    }
    updateList(listId, params) {
        for (let attr in params) {
            this.lists[listId][attr] = params[attr];
        }
    }
}
exports.default = new ListController();
