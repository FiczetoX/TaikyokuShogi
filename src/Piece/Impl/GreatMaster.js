import { Move } from "../Move";
import { Move_Walk } from "../MoveType";
import { Move_Jump } from "../MoveType";
import { Piece } from "../Piece";
import { Vector2 } from "../Vector2";

export const GreatMaster = new Piece("大師", "Great Master","fGfHbF5sW5fFFvWW",[
	new Move(Move_Walk, new Vector2(1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,1), Infinity),
	new Move(Move_Walk, new Vector2(-1,1), Infinity),
	new Move(Move_Walk, new Vector2(0,-1), Infinity),
	new Move(Move_Walk, new Vector2(1,0), 5),
	new Move(Move_Walk, new Vector2(-1,0), 5),
	new Move(Move_Walk, new Vector2(-1,-1), Infinity),
	new Move(Move_Walk, new Vector2(1,-1), Infinity),
	new Move(Move_Jump, new Vector2(0,3), 1),
	new Move(Move_Jump, new Vector2(3,3), 1),
	new Move(Move_Jump, new Vector2(-3,3), 1),
])