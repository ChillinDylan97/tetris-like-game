import { useState, useEffect, useCallback } from "react";

export const useGameStatus = rowsCleared => {
    const [score, setScore] = useState(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(0);

    const linePoints = [40, 100, 300, 1200];

    const calcScore = useCallback(() => {
        //Here we check if we have a score
        if (rowsCleared > 0) {
        // This is how scores in the original Tetris game were calculated
        setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
        setRows(prev => prev + rowsCleared);
        // The line above helps keep track of how many rows we have cleared
        }
        // Note for future reference:
            //As this is a useCallback, so we have to make it depend on something
    }, [level, linePoints, rowsCleared]);

    useEffect(() => {
        calcScore();
    }, [calcScore, rowsCleared, score]);

    return [score, setScore, rows, setRows, level, setLevel];

};