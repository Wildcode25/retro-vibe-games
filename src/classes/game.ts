import { InputHandler } from "./inputHandler"
import { Player } from "./player"
import { selectCharacter } from "@/utils/selectCharacter"
interface Props{
    character: string
    enemies?: Player[]
    friends?: Player[]
    width: number
    height: number
}
export class Game{
    player: Player
    enemies?: Player[]
    friends?: Player[]
    width: number
    height: number
    input: InputHandler
    constructor({character, enemies=[], friends=[], width, height}: Props){
        this.player = selectCharacter(character, this)
        this.enemies = enemies
        this.width = width
        this.height =  height
        this.friends = friends
        this.input = new InputHandler()
    }
    update(){
        this.player.update(this.input.lastKey)
    }
    draw(ctx: CanvasRenderingContext2D){
        ctx.clearRect(0, 0, this.width, this.height)
        this.player.draw(ctx)

   }
   
}