import React, { useState } from  'react';
import { createStage, checkCollision } from '../gameHelpers';
//These are the Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//These are Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

//The three below are components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

console.log('re-render');

const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
    updatePlayerPos({ x: dir, y:0 });
    }
}

const startGame = () => {
    //Resets everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    //Line below means that we're starting a new game here, so it shouldn't be set to true
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
}

const drop = () => {
    // Increase level by 1 after every 10 rows cleared
    if (rows > (level + 1) * 10) {
        setLevel(prev => prev + 1);
        //The speed also increases
        setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
    updatePlayerPos({ x: 0, y: 1, collided: false})
    }
    else {
        // GAME OVER
        // The line below means that if we collide with the top of the grid, it's GAME OVER
        if (player.pos.y < 1) {
            console.log("GAME OVER");
            setGameOver(true);
            setDropTime(null);
        }
        updatePlayerPos({ x: 0, y: 0, collided: true});
        }
}

const keyUp = ({ keyCode }) => {
    if (!gameOver) {
        if (keyCode === 40) {
            console.log("interval on");
            setDropTime(1000 / (level + 1) + 200);
        }
    }
}

const dropPlayer = () => {
    console.log("interval off");
    setDropTime(null);
    drop();
}

    useInterval(() => {
     drop();
    }, dropTime);

const move = ({ keyCode }) => {
    if (!gameOver) {
        if (keyCode === 37) {
            movePlayer(-1);
        } else if (keyCode === 39) {
            movePlayer(1);
        } else if (keyCode === 40) {
            dropPlayer();
        } else if (keyCode === 38) {
            playerRotate(stage, 1);
        }
    }
}



return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
        <StyledTetris>
        <Stage stage={stage}/>
        <aside>
            {gameOver ? (<Display gameOver={gameOver} text="GAME OVER"/>):
        (
            <div>
            <Display text = {`SCORE: ${score}`} />
            <Display text = {`ROWS: ${rows}`} />
            <Display text = {`LEVEL: ${level}`} />
            </div>
        )}
            <StartButton callback={startGame}/>
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>

    );
}


export default Tetris;