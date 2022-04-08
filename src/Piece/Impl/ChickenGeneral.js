import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const ChickenGeneral = new Piece("鶏将", "Chicken General", "bFfW4", [
    new Move(Move_Walk, new Vector2(0, 1), 4),
    new Move(Move_Walk, new Vector2(-1, -1), 1),
    new Move(Move_Walk, new Vector2(1, -1), 1),
]);