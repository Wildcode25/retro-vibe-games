"use client"
import { Game } from "@/classes/game"
import { GameCanvas } from "@/components/game-canvas"
import { useGame } from "@/hooks/useGame"
import { useRef } from "react"

export default function SmashMugen(){
    const gameRef = useRef(new Game({character: 'GOKU', width: 420, height: 200}))
    const {canvasRef} = useGame(gameRef.current)
    return <main className="h-screen w-screen flex justify-center items-center">
        <GameCanvas canvasRef={canvasRef} />
    </main>
}