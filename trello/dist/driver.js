"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoardController_1 = __importDefault(require("./controller/BoardController"));
const ListController_1 = __importDefault(require("./controller/ListController"));
const Board_1 = require("./models/Board");
const CommonUtils_1 = require("./utils/CommonUtils");
const boardId = BoardController_1.default.createBoard("work@tech");
console.log(`Created board: ${boardId}\n`);
BoardController_1.default.showBoard(boardId);
console.log('\n');
BoardController_1.default.updateBoard(boardId, { name: "workat.tech" });
BoardController_1.default.updateBoard(boardId, { privacy: Board_1.PrivacyType.PRIVATE });
BoardController_1.default.showBoard(boardId);
console.log('\n');
BoardController_1.default.show();
console.log('\n');
const boardId2 = BoardController_1.default.createBoard("workat");
console.log(`Created board: ${boardId}\n`);
BoardController_1.default.show();
console.log('\n');
const user1 = {
    name: "Riu",
    email: "iamash@gmail.com",
    id: (0, CommonUtils_1.getRandomId)()
};
const user2 = {
    name: "Piu",
    email: "itzpiu96@gmail.com",
    id: (0, CommonUtils_1.getRandomId)()
};
const user3 = {
    name: "Tia",
    email: "tiapaakhi@gmail.com",
    id: (0, CommonUtils_1.getRandomId)()
};
BoardController_1.default.addMemberToBoard(boardId, user1);
BoardController_1.default.addMemberToBoard(boardId, user2);
BoardController_1.default.addMemberToBoard(boardId, user3);
BoardController_1.default.removeMemberFromBoard(boardId, user2);
BoardController_1.default.showBoard(boardId);
BoardController_1.default.deleteBoard(boardId2);
BoardController_1.default.showBoard(boardId2);
BoardController_1.default.show();
const list1 = ListController_1.default.createList(boardId, "Mock Interviews");
ListController_1.default.showList(list1.id);
console.log('\n');
ListController_1.default.updateList(list1.id, { name: "Mock Interviews - Applied" });
ListController_1.default.showList(list1.id);
console.log('\n');
const list2 = ListController_1.default.createList(boardId, "Mock Interviews - Scheduled");
BoardController_1.default.showBoard(boardId);
