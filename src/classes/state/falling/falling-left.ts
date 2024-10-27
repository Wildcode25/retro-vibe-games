import { Player } from "@/classes/player/player"
import { State } from "../state"
import { keys } from "@/constants"
import { states } from "@/constants"
export class FallingLeft extends State{
    player: Player
    constructor(player: Player){
        super('FALLING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(this.player.isOnGround && this.player.velocity.x !== 0)
            if(this.player.velocity.x<0) return this.player.setState(states.WALKING_LEFT)
            else return this.player.setState(states.WALKING_RIGHT)
        if(this.player.isOnGround) return this.player.setState(states.STANDING_LEFT)
        if(input === keys.PRESS_RIGHT) this.player.setState(states.FALLING_RIGHT)
        if(input===keys.PRESS_UP) this.player.setState(states.JUMPING_LEFT)


    }
    enter(){ 
        this.player.frameY = 9
        this.player.maxFrames = this.player.maxFramesArray[states.FALLING_LEFT]


    }
}