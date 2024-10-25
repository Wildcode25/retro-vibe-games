import { controls, keys } from "@/constants"

export class InputHandler{
    lastKey: string
    constructor(){
        this.lastKey=''
        document.addEventListener('keydown', (e)=>{
            const {key} = e
            if(key===controls.UP) this.lastKey = keys.PRESS_UP
            if(key===controls.LEFT) this.lastKey = keys.PRESS_LEFT
            if(key===controls.RIGHT) this.lastKey = keys.PRESS_RIGHT
            if(key===controls.DOWN) this.lastKey = keys.PRESS_DOWN
            if(key===controls.DASH) this.lastKey = keys.PRESS_BUTTON_C
        })
        document.addEventListener('keyup', (e)=>{
            const {key} = e
            if(key===controls.UP) this.lastKey = keys.RELEASE_UP
            if(key===controls.LEFT) this.lastKey = keys.RELEASE_LEFT
            if(key===controls.RIGHT) this.lastKey = keys.RELEASE_RIGHT
            if(key===controls.DOWN) this.lastKey = keys.RELEASE_DOWN
            if(key===controls.DASH) this.lastKey = keys.RELEASE_BUTTON_C
        })
    }
}