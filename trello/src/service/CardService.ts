import { Board, PrivacyType } from "../models/Board";
import { Card } from "../models/Card";
import { List } from "../models/List";
import { getRandomId } from "../utils/CommonUtils";

export class CardService {

    createCard(listId: number, name: string, description?: string, assignedUser?: number) {
        const id = getRandomId();
        const card: Card = {
            id,
            name,
            listId,
            description,
            assignedUser
        }
        return card;
    }
}