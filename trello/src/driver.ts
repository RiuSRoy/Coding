import BoardController from "./controller/BoardController";
import CardController from "./controller/CardController";
import ListController from "./controller/ListController";
import { PrivacyType } from "./models/Board";
import { User } from "./models/User";
import { getRandomId } from "./utils/CommonUtils";

const boardId = BoardController.createBoard("work@tech");
console.log(`Created board: ${boardId}\n`);

BoardController.showBoard(boardId);
console.log('\n');

BoardController.updateBoard(boardId, { name: "workat.tech"});
BoardController.updateBoard(boardId, { privacy: PrivacyType.PRIVATE });

BoardController.showBoard(boardId);
console.log('\n');

BoardController.show()
console.log('\n');

const boardId2 = BoardController.createBoard("workat");
console.log(`Created board: ${boardId}\n`);

BoardController.show()
console.log('\n');

const user1: User = {
    name: "Riu",
    email: "iamash@gmail.com",
    id: getRandomId()
}

const user2: User = {
    name: "Piu",
    email: "itzpiu96@gmail.com",
    id: getRandomId()
}

const user3: User = {
    name: "Tia",
    email: "tiapaakhi@gmail.com",
    id: getRandomId()
}

BoardController.addMemberToBoard(boardId, user1)
BoardController.addMemberToBoard(boardId, user2)
BoardController.addMemberToBoard(boardId, user3)

BoardController.removeMemberFromBoard(boardId, user2)

BoardController.showBoard(boardId);

BoardController.deleteBoard(boardId2);

BoardController.showBoard(boardId2);

BoardController.show();

const list1 = ListController.createList(boardId, "Mock Interviews");

ListController.showList(list1.id);
console.log('\n')

ListController.updateList(list1.id, { name: "Mock Interviews - Applied" });

ListController.showList(list1.id);
console.log('\n')

const list2 = ListController.createList(boardId, "Mock Interviews - Scheduled");

BoardController.showBoard(boardId);

const card1 = CardController.createCard(list1.id, "abcd@gmail.com");
const card2 = CardController.createCard(list1.id, "abcda@gmail.com");


ListController.showList(list1.id);
console.log('\n');

CardController.updateCard(card2.id, { name: "abcde@gmail.com"})
CardController.updateCard(card2.id, { description: "at 7PM"})

ListController.showList(list1.id);
console.log('\n');


CardController.updateCard(card2.id, { assignedUser: user1.id});

CardController.showCard(card2.id)





