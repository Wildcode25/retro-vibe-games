import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class StandingRight extends State{
    player: Player
    constructor(player: Player){
        super('STANDING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        
        if(input===keys.PRESS_RIGHT) 
            return this.player.setState(states.WALKING_RIGHT)
        if(input===keys.PRESS_LEFT)
            return this.player.setState(states.WALKING_LEFT)
        if(input===keys.PRESS_UP)
            return this.player.setState(states.JUMPING_RIGHT)
        if(this.player.isOnGround) this.player.setState(states.STANDING_RIGHT)
    }
    enter(){
      
            this.player.maxFrames = this.player.maxFramesArray[states.STANDING_LEFT]
            this.player.frameY = 0
        
    }
}