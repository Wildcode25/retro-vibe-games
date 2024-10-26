import { Game } from "@/classes/game";
import { useCallback } from "react";

export function useGame(game: Game){
    const canvasRef = useCallback((canvas: HTMLCanvasElement)=>{
        if(canvas){
            const ctx = canvas.getContext('2d')
            let lastTime = 0
            if(ctx){
               
                const animate = (timeStamp: number)=>{
                    const deltaTime = timeStamp-lastTime
                    lastTime=timeStamp
                    game.update()
                    
                    game.draw(ctx, deltaTime)
                    
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