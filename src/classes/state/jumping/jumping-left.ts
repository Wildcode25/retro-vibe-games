import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class JumpingLeft extends State{
    player: Player
    constructor(player: Player){
        super('JUMPING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(this.player.isOnGround) return this.player.setState(states.STANDING_LEFT)
        if(input === keys.PRESS_RIGHT) this.player.setState(states.JUMPING_RIGHT)
        if(this.player.velocity.y>this.player.weight) this.player.setState(states.FALLING_LEFT)


    }
    enter(){
        if((this.player.jumps>0 && this.player.velocity.y >= this.player.weight) || this.player.isOnGround){
            this.player.jumps--
            this.player.velocity.y = -this.player.maxSpeed.y
            this.player.frameY = 7
            this.player.maxFrames = this.player.maxFramesArray[states.JUMPING_LEFT]
        }  


    }
}