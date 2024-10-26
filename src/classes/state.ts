import { Player } from "./player"
import { keys, states } from "@/constants"
export class State{
    
    state: string
    constructor(state: string){
        this.state = state
    }
    
}

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
        this.player.velocity = {
            x: 0,
            y: 0
        }
        if(
            this.player.isOnGround
        ){
            this.player.maxFrames = this.player.maxFramesArray[states.STANDING_LEFT]
            this.player.frameY = 0
        }
    }
}
export class StandingLeft extends State{
    player: Player
    constructor(player: Player){
        super('STANDING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.PRESS_LEFT)
            return this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_RIGHT) 
           return  this.player.setState(states.WALKING_RIGHT)
        if(input === keys.PRESS_UP) 
            return this.player.setState(states.JUMPING_LEFT)
        if(this.player.isOnGround) this.player.setState(states.STANDING_LEFT)

    }
    enter(){
        this.player.velocity = {
            x: 0,
            y: 0
        }
        if(
            this.player.isOnGround
        ){
            this.player.maxFrames = this.player.maxFramesArray[states.STANDING_LEFT]
            this.player.frameY = 1
        }

    }
}
export class WalkingRight extends State{
    player: Player
    constructor(player: Player){
        super('WALKING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_RIGHT)
            return this.player.setState(states.STANDING_RIGHT)
        if(input === keys.PRESS_LEFT) 
            return this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_BUTTON_C)
            return this.player.setState(states.DASH_RIGHT)
        if(input === keys.PRESS_UP) 
            return this.player.setState(states.JUMPING_RIGHT)
    }
    enter(){
        this.player.velocity.x = this.player.maxSpeed.x
        if(this.player.isOnGround){

            this.player.frameY = 2
            this.player.maxFrames = this.player.maxFramesArray[states.WALKING_RIGHT]
        }

    }
}

export class WalkingLeft extends State{
    player: Player
    constructor(player: Player){
        super('WALKING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_LEFT)
            return this.player.setState(states.STANDING_LEFT)
        if(input===keys.PRESS_RIGHT) 
            return this.player.setState(states.WALKING_RIGHT)
        if(input === keys.PRESS_BUTTON_C)
            return this.player.setState(states.DASH_LEFT)
        if(input === keys.PRESS_UP) 
            return this.player.setState(states.JUMPING_LEFT)
        
    }
    enter(){
        this.player.velocity.x = -this.player.maxSpeed.x
        if(this.player.isOnGround){

            this.player.frameY = 3
            this.player.maxFrames = this.player.maxFramesArray[states.WALKING_LEFT]
        }


    }
}
export class DashRight extends State{
    player: Player
    constructor(player: Player){
        super('DASHING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_RIGHT)
            return this.player.setState(states.STANDING_RIGHT)
        if(input === keys.RELEASE_BUTTON_C)
            return this.player.setState(states.WALKING_RIGHT)
        if(input === keys.RELEASE_LEFT)
            return this.player.setState(states.STANDING_LEFT)
        if(input === keys.PRESS_UP) 
            return this.player.setState(states.JUMPING_RIGHT)
        
    }
    enter(){
        this.player.velocity.x = this.player.maxSpeed.x*2
        if(this.player.isOnGround){

            this.player.frameY = 4
            this.player.maxFrames = this.player.maxFramesArray[states.DASH_RIGHT]
        }


    }
}
export class DashLeft extends State{
    player: Player
    constructor(player: Player){
        super('DASHING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_LEFT)
            return this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_RIGHT)
            return this.player.setState(states.STANDING_RIGHT)
        if(input === keys.RELEASE_BUTTON_C)
           return  this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_UP) 
           return  this.player.setState(states.JUMPING_LEFT)
        
    }
    enter(){
        this.player.velocity.x = -this.player.maxSpeed.x*2
        if(this.player.isOnGround){

            this.player.frameY = 5
            this.player.maxFrames = this.player.maxFramesArray[states.DASH_LEFT]
        }

    }
}

export class JumpingRight extends State{
    player: Player
    constructor(player: Player){
        super('JUMPING RIGHT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_LEFT)
            return this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_RIGHT)
            return this.player.setState(states.STANDING_RIGHT)
        if(this.player.isOnGround && this.player.velocity.x !== 0)
            if(this.player.velocity.x<0) return this.player.setState(states.WALKING_LEFT)
            else this.player.setState(states.WALKING_RIGHT)
        else if(this.player.isOnGround) return this.player.setState(states.STANDING_RIGHT)    

        
    }
    enter(){
        this.player.velocity.y = -this.player.maxSpeed.y
       
        this.player.frameY = 6
        this.player.maxFrames = this.player.maxFramesArray[states.JUMPING_RIGHT]

    }
}
export class JumpingLeft extends State{
    player: Player
    constructor(player: Player){
        super('JUMPING LEFT')
        this.player = player
    }
    handleInput(input: string){
        if(input === keys.RELEASE_LEFT)
           return  this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_RIGHT)
            return this.player.setState(states.STANDING_RIGHT)
        if(this.player.isOnGround && this.player.velocity.x !== 0)
            if(this.player.velocity.x<0) return this.player.setState(states.WALKING_LEFT)
            else this.player.setState(states.WALKING_RIGHT)
        else if(this.player.isOnGround) return this.player.setState(states.STANDING_LEFT)    
        
    }
    enter(){
        this.player.velocity.y = -this.player.maxSpeed.y
        this.player.frameY = 7
        this.player.maxFrames = this.player.maxFramesArray[states.JUMPING_LEFT]


    }
}