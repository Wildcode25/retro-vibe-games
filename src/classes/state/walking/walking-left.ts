import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class WalkingLeft extends State{
    player: Player
    constructor(player: Player){
        super('WALKING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_LEFT)
             this.player.setState(states.STANDING_LEFT)
        if(input===keys.PRESS_RIGHT) 
             this.player.setState(states.WALKING_RIGHT)
        if(input === keys.PRESS_BUTTON_C)
             this.player.setState(states.DASH_LEFT)
        if(input === keys.PRESS_UP) 
             this.player.setState(states.JUMPING_LEFT)
        if(this.player.velocity.y>this.player.weight) 
            this.player.setState(states.FALLING_LEFT)

        
    }
    enter(){

            this.player.frameY = 3
            this.player.maxFrames = this.player.maxFramesArray[states.WALKING_LEFT]


    }
}