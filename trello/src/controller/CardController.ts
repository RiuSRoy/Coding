import { Card } from "../models/Card";
import { List } from "../models/List";
import { CardService } from "../service/CardService";
import { ListService } from "../service/ListService";
import BoardController from "./BoardController";
import ListController from "./ListController";

class CardController {

    cards: Record<number, Card> = {}

    createCard(listId: number, name: string) {
        const cardService = new CardService()
        const card = cardService.createCard(listId, name);
        console.log(`Created list: ${card.id}`);
        this.cards[card.id] = card;

        ListController.lists[listId].cards.push(card.id);
        return card;
    }

    showCard(cardId: number) {
        console.log(this.cards[cardId])
    }

    updateCard(cardId: number, params: Partial<Card>) {
        for (let attr in params) {
            (this.cards[cardId] as any)[attr] = (params as any)[attr];
        }
    }

}

export default new CardController();