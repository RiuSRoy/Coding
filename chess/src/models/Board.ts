import { Cell } from "./Cell";
import { Color } from "./Piece";

export interface Board {
    
    boardSize: number;
    cells: Cell[][];
    turn: Color
}