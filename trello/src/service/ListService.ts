import { Board, PrivacyType } from "../models/Board";
import { List } from "../models/List";
import { getRandomId } from "../utils/CommonUtils";

export class ListService {

    createList(boardId: number, name: string) {
        const id = getRandomId();
        const list: List = {
            id,
            name,
            boardId,
            cards: []
        }
        return list;
    }
}