import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class JumpingRight extends State{
    player: Player
    constructor(player: Player){
        super('JUMPING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        if(this.player.isOnGround) return this.player.setState(states.STANDING_RIGHT)    
        if(input === keys.PRESS_LEFT) this.player.setState(states.JUMPING_LEFT)
        if(this.player.velocity.y>this.player.weight) this.player.setState(states.FALLING_RIGHT)
    }
    enter(){
        if((this.player.jumps>0 && this.player.velocity.y >= this.player.weight) || this.player.isOnGround){
            this.player.jumps--
            this.player.velocity.y = -this.player.maxSpeed.y
        }  
        this.player.frameY = 6
        this.player.maxFrames = this.player.maxFramesArray[states.JUMPING_RIGHT]

    }
}
