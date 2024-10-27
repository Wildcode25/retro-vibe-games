import { Game } from "@/classes/game";
import { Player } from "@/classes/player/player"
import { Naruto } from "@/classes/player/naruto";
export function selectCharacter(character:string, game:Game):Player{
    // if(character === 'GOKU') 
        return new Naruto({game})
}