import { StateType } from "@/constants/types";
import { Game } from "./game";
import { InputHandler } from "./inputHandler";
import { DashLeft, DashRight, JumpingLeft, JumpingRight, StandingLeft, StandingRight, WalkingLeft, WalkingRight } from "./state";
 
interface Props
    {
        game:Game,
        height: number,
        width: number,
        src: string
    }

export class Player{
    game: Game
    x: number
    y: number
    height:number
    width: number
    frameX: number
    frameY: number
    currentState: StateType
    states: StateType[]
    input: InputHandler
    image: HTMLImageElement
    velocity : {
        x: number,
        y: number
    }
    maxSpeed: {
        y: number,
        x: number
    }
    weight: number
    constructor({game, height, width, src}:Props){
        this.game = game
        this.height = height
        this.width = width
        this.y = 100
        this.x = 0
        this.states = [
            new StandingRight(this), new StandingLeft(this), 
            new WalkingRight(this), new WalkingLeft(this),
            new DashRight(this), new DashLeft(this),
            new JumpingRight(this), new JumpingLeft(this)
        ]
        this.currentState = this.states[0]
        this.frameX = 0
        this.frameY = 0
        this.velocity = {
            x: 0,
            y: 0
        }
        this.weight=3
        this.input = new InputHandler()
        this.image = new Image()
        this.image.src = src
        this.maxSpeed = {
            x: 2,
            y: 20
        }
    }
    draw(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    setState(stateIndex: number){
        this.currentState = this.states[stateIndex]
        console.log(this.currentState.state)
        this.currentState.enter()
    }   
    update(input: string){
        this.currentState.handleInput(input)
        this.x += this.velocity.x
        this.y+=this.velocity.y
        if(this.isOnGround){
            this.y = this.game.height-this.height 
        }
        else{
            this.velocity.y+=this.weight
        }
    }
    get isOnGround(){
        return this.y>=this.game.height-this.height
    }
}
export class Goku extends Player{
    constructor({game}:{game: Game}){
        super({game, height: 100, width: 50, src: ""})
        
    }
}