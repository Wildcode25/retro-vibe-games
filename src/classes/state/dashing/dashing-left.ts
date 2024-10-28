import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class DashLeft extends State{
    player: Player
    constructor(player: Player){
        super('DASHING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_LEFT)
             this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_BUTTON_C)
             this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_RIGHT) 
            this.player.setState(states.WALKING_RIGHT)   
        if(input === keys.PRESS_UP) 
             this.player.setState(states.JUMPING_LEFT)
        if(this.player.velocity.y>this.player.weight) this.player.setState(states.FALLING_LEFT)

        
    }
    enter(){
        this.player.velocity.x = -this.player.maxSpeed.x*1.5

            this.player.frameY = 5
            this.player.maxFrames = this.player.maxFramesArray[states.DASH_LEFT]
        

    }
}
