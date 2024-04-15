import { useState, useCallback } from "react";
import { TETRIMINOES, randomTetromino } from "../tetrominoes";
import { STAGE_WIDTH } from "../gameHelpers";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x:0, y:0},
        tetromino: TETRIMINOES[0].shape,
        collided: false,
    });

    const updatePlayerPos =  ({x, y, collided}) => {
        setPlayer(prev => ({
        ...prev,
        pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
        collided,
    }))
}

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH / 2-2, y:0},
            tetromino: randomTetromino().shape,
            collided: false,
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}
