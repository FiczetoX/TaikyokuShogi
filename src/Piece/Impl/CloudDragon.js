import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const CloudDragon = new Piece("雲龍", "Cloud Dragon", "FFWbWW", [
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 0), 1),
    new Move(Move_Walk, new Vector2(-1, -1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 0), 1),
    new Move(Move_Walk, new Vector2(1, -1), Infinity),
    new Move(Move_Walk, new Vector2(0, 1), 1),
    new Move(Move_Walk, new Vector2(0, -1), Infinity)
]);