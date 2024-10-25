import { Game } from "@/classes/game";
import { Goku, Player } from "@/classes/player";
export function selectCharacter(character:string, game:Game):Player{
    // if(character === 'GOKU') 
        return new Goku({game})
}