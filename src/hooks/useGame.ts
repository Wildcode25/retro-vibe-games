import { Game } from "@/classes/game";
import { useCallback } from "react";

export function useGame(game: Game){
    const canvasRef = useCallback((canvas: HTMLCanvasElement)=>{
        if(canvas){
            const ctx = canvas.getContext('2d')
            if(ctx){
                const animate = ()=>{
                    game.update()
                    game.draw(ctx)
                    requestAnimationFrame(animate)
                }
                animate()
            }
        }       
    }, [game])  
    return {
        canvasRef
    }
}