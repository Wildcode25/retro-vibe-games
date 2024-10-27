import { StateType } from "@/constants/types";
import { Game } from "../game";
import { InputHandler } from "../inputHandler";
import { keys } from "@/constants";
import { StandingRight } from "../state/standing/standing-right";
import { StandingLeft } from "../state/standing/standing-left";
import { WalkingRight } from "../state/walking/walking-right";
import { WalkingLeft } from "../state/walking/walking-left";
import { DashRight } from "../state/dashing/dashing-right";
import { DashLeft } from "../state/dashing/dashing-left";
import { JumpingLeft } from "../state/jumping/jumping-left";
import { JumpingRight } from "../state/jumping/jumping-right";
import { FallingRight } from "../state/falling/falling-right";
import { FallingLeft } from "../state/falling/falling-left";

interface Props {
    game: Game,
    height: number,
    width: number,
    src: string,
    spriteWidth: number,
    spriteHeight: number,
    maxFrames: number,
    maxFramesArray: number[],
    framesSize: {
        width: number,
        height: number
    }[]
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
    fps: number
    frameInterval: number
    frameTimer: number
    jumps: number
    framesSize: Props['framesSize']
    constructor({framesSize, maxFramesArray, game, height, width, src, spriteHeight, spriteWidth}: Props) {
        this.game = game
        this.height = height
        this.width = width
        this.y = 0
        this.x = 210
        this.states = [
            new StandingRight(this), new StandingLeft(this),
            new WalkingRight(this), new WalkingLeft(this),
            new DashRight(this), new DashLeft(this),
            new JumpingRight(this), new JumpingLeft(this),
            new FallingRight(this), new FallingLeft(this)
        ]
        this.maxFramesArray = maxFramesArray
        this.currentState = this.states[0]
        this.frameX = 0
        this.frameY = 0
        this.velocity = {
            x: 0,
            y: 0
        }
        this.jumps = 3
        this.weight = 0.5
        this.input = new InputHandler()
        this.image = new Image()
        this.image.src = src
        this.maxSpeed = {
            x: 3,
            y: 8
        }
        this.spriteHeight = spriteHeight
        this.spriteWidth = spriteWidth
        this.maxFrames = this.maxFramesArray[0]
        this.fps = 30
        this.frameTimer = 0
        this.frameInterval = 1000/this.fps
        this.framesSize = framesSize
        this.characterWidth = this.framesSize[0].width
        this.characterHeight = this.framesSize[0].height
        this.padding = {
            x: (spriteWidth - this.characterWidth) / 2,
            y: (spriteHeight - this.characterHeight) / 2
        }
    }
    draw(ctx: CanvasRenderingContext2D) {
        
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
        this.currentState.enter()
        this.characterWidth = this.framesSize[stateIndex].width
        this.characterHeight = this.framesSize[stateIndex].height
        
        console.log(this.currentState.state)
    }
    update(input: string, deltaTime: number) {
        this.currentState.handleInput(input)
        this.x += this.velocity.x
        this.y += this.velocity.y
        if (this.isOnGround) {
            this.jumps = 3
            this.velocity.y = 0
        }
        else {
            this.velocity.y += this.weight
        }
        if(this.frameTimer>this.frameInterval){
            if(this.frameX<this.maxFrames) this.frameX++
            else this.frameX=0
            this.frameTimer=0
        }else this.frameTimer+=deltaTime
        if(input===keys.PRESS_RIGHT)
            this.velocity.x = this.maxSpeed.x      
         
        else if(input === keys.PRESS_LEFT)
            this.velocity.x = -this.maxSpeed.x
         
        else if(
            (input===keys.RELEASE_LEFT &&this.isMovingToLeft)  || 
            (input === keys.RELEASE_RIGHT&&this.isMovingToRight) 
        ) this.velocity.x = 0
        
    }
    get isMovingToLeft(){
        return this.velocity.x<0
    }
    get isMovingToRight(){
        return this.velocity.x>0
    }
    get isOnGround() {
        return (this.y >= 210 - this.height && this.x>200 && this.height && this.x<500-this.width-10 )
    }
    get frame() {
        return {
            x: this.spriteWidth*this.frameX+this.padding.x,
            y: this.spriteHeight*this.frameY+this.padding.y
        }
    }
}
