import { Game } from "@/classes/game";
import { useCallback } from "react";

export function useGame(game: Game){
    const canvasRef = useCallback((canvas: HTMLCanvasElement)=>{
        if(canvas){
            const ctx = canvas.getContext('2d')
            let lastTime = 0
            if(ctx){
               
                const animate = (timeStamp: number)=>{
                    ctx.clearRect(0, 0, game.width, game.height)
                    const deltaTime = timeStamp-lastTime
                    lastTime=timeStamp
                    game.update(deltaTime)
                    game.draw(ctx)
                    requestAnimationFrame(animate)
                }
                animate(0)
            }
        }       
    }, [game])  
    return {
        canvasRef
    }
}