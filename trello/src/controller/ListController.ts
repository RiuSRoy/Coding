import { List } from "../models/List";
import { ListService } from "../service/ListService";
import BoardController from "./BoardController";

class ListController {

    lists: Record<number, List> = {}

    createList(boardId: number, name: string) {
        const listService = new ListService();
        const list = listService.createList(boardId, name);
        console.log(`Created list: ${list.id}`);
        this.lists[list.id] = list;

        BoardController.boards[boardId].lists.push(list.id);
        return list;
    }

    showList(listId: number) {
        console.log(this.lists[listId])
    }

    updateList(listId: number, params: Partial<List>) {
        for (let attr in params) {
            (this.lists[listId] as any)[attr] = (params as any)[attr];
        }
    }

}

export default new ListController();