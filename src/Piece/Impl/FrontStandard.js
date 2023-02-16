import { Move } from "../Move";
import { moveWalk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const FrontStandard = new Piece("前旗", "Front Standard", "F3WW", [
    new Move(moveWalk, new Vector2(0, 1), Infinity),
    new Move(moveWalk, new Vector2(0, -1), Infinity),
    new Move(moveWalk, new Vector2(-1, 0), Infinity),
    new Move(moveWalk, new Vector2(1, 0), Infinity),
    new Move(moveWalk, new Vector2(-1, -1), 3),
    new Move(moveWalk, new Vector2(1, -1), 3),
    new Move(moveWalk, new Vector2(-1, 1), 3),
    new Move(moveWalk, new Vector2(1, 1), 3),
]);
