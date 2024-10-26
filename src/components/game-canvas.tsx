"use client"
import { LegacyRef, useState } from "react"

export function GameCanvas({canvasRef}:{canvasRef: LegacyRef<HTMLCanvasElement>}){
    const [toggleSize, setToggleSize] = useState(false)

    return <div className={`h-[${toggleSize?'720':'200'}px] w-[${toggleSize?'720':'420'}px] relative`}>
        <button className="right-1 top-1 h-[16px] w-[16px] border-2 absolute" onClick={()=>setToggleSize(!toggleSize)}>

        </button>
        <canvas ref={canvasRef} width={toggleSize?1280:720} height={toggleSize?720:420} className="w-full h-full">
        </canvas>
    </div>
}