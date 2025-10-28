import { Board, PrivacyType } from "../models/Board";
import { getRandomId } from "../utils/CommonUtils";

export class BoardService {

    createBoard(name: string) {
        const id = getRandomId();
        const board: Board = {
            id,
            name,
            privacy: PrivacyType.PUBLIC,
            url: `/board/${id}`,
            lists: [],
            members: new Set()
        }
        return board;
    }
}