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
            this.player.setState(states.WALKING_RIGHT)
        if(input===keys.PRESS_LEFT)
            this.player.setState(states.WALKING_LEFT)
        if(input===keys.PRESS_UP)
            this.player.setState(states.JUMPING_RIGHT)

    }
    enter(){
        this.player.velocity = {
            x: 0,
            y: 0
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
            this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_RIGHT) 
            this.player.setState(states.WALKING_RIGHT)
        if(input === keys.PRESS_UP) 
            this.player.setState(states.JUMPING_LEFT)
    }
    enter(){
        this.player.velocity = {
            x: 0,
            y: 0
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
            this.player.setState(states.STANDING_RIGHT)
        if(input === keys.PRESS_LEFT) 
            this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_BUTTON_C)
            this.player.setState(states.DASH_RIGHT)
        if(input === keys.PRESS_UP) 
            this.player.setState(states.JUMPING_RIGHT)
    }
    enter(){
        this.player.velocity.x = this.player.maxSpeed.x
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
            this.player.setState(states.STANDING_LEFT)
        if(input===keys.PRESS_RIGHT) 
            this.player.setState(states.WALKING_RIGHT)
        if(input === keys.PRESS_BUTTON_C)
            this.player.setState(states.DASH_LEFT)
        if(input === keys.PRESS_UP) 
            this.player.setState(states.JUMPING_LEFT)
        
    }
    enter(){
        this.player.velocity.x = -this.player.maxSpeed.x
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
            this.player.setState(states.STANDING_RIGHT)
        if(input === keys.RELEASE_BUTTON_C)
            this.player.setState(states.WALKING_RIGHT)
        if(input === keys.RELEASE_LEFT)
            this.player.setState(states.STANDING_LEFT)
        if(input === keys.PRESS_UP) 
            this.player.setState(states.JUMPING_RIGHT)
        
    }
    enter(){
        this.player.velocity.x = this.player.maxSpeed.x*2
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
            this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_RIGHT)
            this.player.setState(states.STANDING_RIGHT)
        if(input === keys.RELEASE_BUTTON_C)
            this.player.setState(states.WALKING_LEFT)
        if(input === keys.PRESS_UP) 
            this.player.setState(states.JUMPING_LEFT)
        
    }
    enter(){
        this.player.velocity.x = -this.player.maxSpeed.x*2
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
            this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_RIGHT)
            this.player.setState(states.STANDING_RIGHT)
        if(this.player.isOnGround && this.player.velocity.x !== 0)
            if(this.player.velocity.x<0) this.player.setState(states.WALKING_LEFT)
            else this.player.setState(states.WALKING_RIGHT)
        
    }
    enter(){
        this.player.velocity.y = -this.player.maxSpeed.y
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
            this.player.setState(states.STANDING_LEFT)
        if(input === keys.RELEASE_RIGHT)
            this.player.setState(states.STANDING_RIGHT)
        if(this.player.isOnGround && this.player.velocity.x !== 0)
            if(this.player.velocity.x<0) this.player.setState(states.WALKING_LEFT)
            else this.player.setState(states.WALKING_RIGHT)    
        
    }
    enter(){
        this.player.velocity.y = -this.player.maxSpeed.y
    }
}