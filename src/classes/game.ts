import { InputHandler } from "./inputHandler"
import { Player } from "./player/player"
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
    update(deltaTime: number){
        this.player.update(this.input.lastKey, deltaTime)
    }
    draw(ctx: CanvasRenderingContext2D){
            const background  = new Image()
            background.src = '/sprites/stages/brawlhaven/BG_Brawlhaven.png'
            ctx.drawImage(background, 0, 0, 2048, 1151, 0, 0, this.width, this.height)
            const platform1  = new Image()
            platform1.src = '/sprites/stages/brawlhaven/Platform_BH4A.png'
            ctx.drawImage(platform1, 0, 0, 1100, 837, 210, 200, 150, 150)
            const platform2  = new Image()
            platform2.src = '/sprites/stages/brawlhaven/Platform_BH4B.png'
            ctx.drawImage(platform2, 100, 0, 1000, 827, 180+160, 200-2, 150, 150)
            this.player.draw(ctx)
            
        

   }
   
}