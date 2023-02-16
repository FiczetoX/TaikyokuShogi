import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const Queen = new Piece('奔王', 'Queen', 'WWFF', [
    new Move(Move_Walk, new Vector2(0, -1), Infinity),
    new Move(Move_Walk, new Vector2(0, 1), Infinity),
    new Move(Move_Walk, new Vector2(-1, -1), Infinity),
    new Move(Move_Walk, new Vector2(1, -1), Infinity),
    new Move(Move_Walk, new Vector2(-1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 1), Infinity),
    new Move(Move_Walk, new Vector2(1, 0), Infinity),
    new Move(Move_Walk, new Vector2(-1, 0), Infinity)
])
