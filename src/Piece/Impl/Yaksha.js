import { Move } from '../Move'
import { Move_Walk } from '../MoveType'
import { Piece } from '../Piece'
import { Vector2 } from '../Vector2'

export const Yaksha = new Piece('夜叉', 'Yaksha', 'fFbWsW3', [
    new Move(Move_Walk, new Vector2(0, -1), 1),
    new Move(Move_Walk, new Vector2(-1, 1), 1),
    new Move(Move_Walk, new Vector2(1, 1), 1),
    new Move(Move_Walk, new Vector2(-1, 0), 3),
    new Move(Move_Walk, new Vector2(1, 0), 3)
])
