import { Board } from "../models/Board";
import { List } from "../models/List";
import { User } from "../models/User";
import { BoardService } from "../service/BoardService";
import ListController from "./ListController";

class BoardController {

    boards: Record<number, Board> = {};

    createBoard(name: string) {
        const boardService = new BoardService();
        const board = boardService.createBoard(name);
        this.boards[board.id] = board;
        return board.id;
    }

    showBoard(boardId: number) {
        if (!this.boards[boardId]) {
            console.error(`Board ${boardId} not found`)
            return;
        }
        const board: any = this.boards[boardId];

        const lists: List[] = [];
        for (let listId of board.lists) {
            lists.push(ListController.lists[listId]);
        }

        board.lists = lists;
        console.log(board);
    }

    updateBoard(boardId: number, params: Partial<Board>) {
        for (const attr in params) {
                if (attr !== 'lists') {
                    (this.boards[boardId] as any)[attr] = (params as any)[attr];
                }
        }
    }

    show() {
        console.log(Object.values(this.boards));
    }


    addMemberToBoard(boardId: number, user: User) {
        this.boards[boardId].members.add(user);
    }

    removeMemberFromBoard(boardId: number, user: User) {
        this.boards[boardId].members.delete(user);
    }



    deleteBoard(boardId: number) {
        delete this.boards[boardId];
    }
}

export default new BoardController();