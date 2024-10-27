import { Player } from "./player"
import { Game } from "../game"
export class Naruto extends Player {
    constructor({ game }: { game: Game }) {
        super({
            game,
            height: 35,
            width: 30,
            src: "/sprites/naruto/sheet.png",
            spriteHeight: 100,
            spriteWidth: 100,
            maxFrames: 11,
            maxFramesArray: [11, 11, 7, 7, 5, 5, 1, 1,1,1],
            framesSize: [
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 50,
                    height: 40
                },
                {
                    width: 50,
                    height: 40
                },
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 45,
                    height: 50
                },
                {
                    width: 45,
                    height: 50
                }
            ]
        })

    }
}