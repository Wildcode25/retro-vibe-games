import { Game } from "@/classes/game";
import { Naruto, Player } from "@/classes/player";
export function selectCharacter(character:string, game:Game):Player{
    // if(character === 'GOKU') 
        return new Naruto({game})
}