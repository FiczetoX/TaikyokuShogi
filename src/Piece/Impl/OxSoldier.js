import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const OxSoldier = new Piece("牛兵", "Ox Soldier", "bWsW3fWWfFF", [
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 0), 3),
    new Move(Move_Walk, new Vector2(-1, 0), 3),
    new Move(Move_Walk, new Vector2(0, -1), 1),
]);
