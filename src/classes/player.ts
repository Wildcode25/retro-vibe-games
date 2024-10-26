import { StateType } from "@/constants/types";
import { Game } from "./game";
import { InputHandler } from "./inputHandler";
import { DashLeft, DashRight, JumpingLeft, JumpingRight, StandingLeft, StandingRight, WalkingLeft, WalkingRight } from "./state";

interface Props {
    game: Game,
    height: number,
    width: number,
    src: string,
    spriteWidth: number,
    spriteHeight: number,
    maxFrames: number,
    characterWidth: number,
    characterHeight: number
}

export class Player {
    maxFrames: number
    game: Game
    x: number
    y: number
    height: number
    width: number
    frameX: number
    frameY: number
    currentState: StateType
    states: StateType[]
    input: InputHandler
    image: HTMLImageElement
    velocity: {
        x: number,
        y: number
    }
    maxSpeed: {
        y: number,
        x: number
    }
    weight: number
    spriteWidth: number
    spriteHeight: number
    padding: {
        x: number,
        y: number
    }
    characterWidth: number
    characterHeight: number
    maxFramesArray: number[]
    constructor({ game, height, width, src, spriteHeight, spriteWidth, maxFrames, characterHeight, characterWidth }: Props) {
        this.game = game
        this.height = height
        this.width = width
        this.y = 0
        this.x = 210
        this.characterWidth = characterWidth
        this.characterHeight = characterHeight
        this.padding = {
            x: (spriteWidth - this.characterWidth) / 2,
            y: (spriteHeight - this.characterHeight) / 2
        }
        this.states = [
            new StandingRight(this), new StandingLeft(this),
            new WalkingRight(this), new WalkingLeft(this),
            new DashRight(this), new DashLeft(this),
            new JumpingRight(this), new JumpingLeft(this)
        ]
        this.maxFramesArray = [12, 12, 8, 8, 6, 6, 2, 2, 2,2]
        this.currentState = this.states[0]
        this.frameX = 0
        this.frameY = 0
        this.velocity = {
            x: 0,
            y: 0
        }
        this.weight = 1
        this.input = new InputHandler()
        this.image = new Image()
        this.image.src = src
        this.maxSpeed = {
            x: 3,
            y: 15
        }
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.maxFrames = maxFrames
    }
    draw(ctx: CanvasRenderingContext2D) {
        if(this.frameX<this.maxFrames-1) this.frameX++
        else this.frameX=0
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(
            this.image, 
            this.frame.x, this.frame.y, 
            this.characterWidth, this.characterHeight, 
            this.x, this.y, 
            this.width, this.height)
    }
    setState(stateIndex: number) {
        this.currentState = this.states[stateIndex]
        console.log(this.currentState.state)
        this.currentState.enter()
        
    }
    update(input: string) {
        this.currentState.handleInput(input)
        this.x += this.velocity.x
        this.y += this.velocity.y
        if (this.isOnGround) {
            this.y = 210 - this.height
        }
        else {
            this.velocity.y += this.weight
        }
    }
    get isOnGround() {
        return (this.y >= 210 - this.height && this.x>200 && this.height && this.x<500-this.width )
    }
    get frame() {
        return {
            x: this.spriteWidth*this.frameX+this.padding.x,
            y: this.spriteHeight*this.frameY+this.padding.y
        }
    }
}
export class Naruto extends Player {
    constructor({ game }: { game: Game }) {
        super({
            game,
            height: 40,
            width: 35,
            src: "/sprites/naruto/sheet.png",
            spriteHeight: 100,
            spriteWidth: 100,
            maxFrames: 11,
            characterHeight: 50,
            characterWidth: 45
        })

    }
}