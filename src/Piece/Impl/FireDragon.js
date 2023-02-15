import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FireDragon = new Piece("火龍", "Fire Dragon", "WWbF2fF4"[
    new Move(Move_Walk, new Vector2(0,1), Infinity),
    new Move(Move_Walk, new Vector2(1,0), Infinity),
    new Move(Move_Walk, new Vector2(-1,0), Infinity),
    new Move(Move_Walk, new Vector2(0,-1), Infinity),
    new Move(Move_Walk, new Vector2(-1,1), 4),
    new Move(Move_Walk, new Vector2(1,1), 4),
    new Move(Move_Walk, new Vector2(1,-1), 2),
    new Move(Move_Walk, new Vector2(-1,-1), 2)
])