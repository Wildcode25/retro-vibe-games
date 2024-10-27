import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class DashRight extends State{
    player: Player
    constructor(player: Player){
        super('DASHING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_RIGHT)
            this.player.setState(states.STANDING_RIGHT)
        if(input === keys.RELEASE_BUTTON_C)
             this.player.setState(states.WALKING_RIGHT)
        if(input === keys.PRESS_LEFT)
             this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_UP) 
             this.player.setState(states.JUMPING_RIGHT)

        
    }
    enter(){
        this.player.velocity.x = this.player.maxSpeed.x*1.5
        if(this.player.isOnGround){

            this.player.frameY = 4
            this.player.maxFrames = this.player.maxFramesArray[states.DASH_RIGHT]
        }


    }
}