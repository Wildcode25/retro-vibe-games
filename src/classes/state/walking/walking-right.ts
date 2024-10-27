import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class WalkingRight extends State{
    player: Player
    constructor(player: Player){
        super('WALKING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_RIGHT)
             this.player.setState(states.STANDING_RIGHT)
        if(input === keys.PRESS_LEFT) 
             this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_BUTTON_C)
             this.player.setState(states.DASH_RIGHT)
        if(input === keys.PRESS_UP) 
             this.player.setState(states.JUMPING_RIGHT)
        if(this.player.velocity.y>this.player.weight) this.player.setState(states.FALLING_RIGHT)

    }
    enter(){
        this.player.velocity.x = this.player.maxSpeed.x

        if(this.player.isOnGround){

            this.player.frameY = 2
            this.player.maxFrames = this.player.maxFramesArray[states.WALKING_RIGHT]
        }

    }
}