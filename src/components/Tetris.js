import React, { useState } from  'react';
import { createStage, checkCollision } from '../gameHelpers';
//These are the Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//These are Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

//The three below are components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [ setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

console.log('re-render');

const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
    updatePlayerPos({ x: dir, y:0 });
    }
}

const startGame = () => {
    //Resets everything
    setStage(createStage());
    resetPlayer();
    //Line below means that we're starting a new game here, so it shouldn't be set to true
    setGameOver(false);
}

const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
    updatePlayerPos({ x: 0, y: 1, collided: false})
    }
    else {
        // GAME OVER
        // The line below means that if we collide with the top of the grid, it's GAME OVER
        if (player.poa.y < 1) {
            console.log("GAME OVER");
            setGameOver(true);
            setDropTime(null);
        }
        updatePlayerPos({ x: 0, y: 0, collided: true})
        }
}

const dropPlayer = () => {
    drop();
}

const move = ({ keyCode }) => {
    if (!gameOver) {
        if (keyCode === 37) {
            movePlayer(-1);
        } else if (keyCode === 39) {
            movePlayer(1);
        } else if (keyCode === 40) {
            dropPlayer();
        }
    }
}


return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <StyledTetris>
        <Stage stage={stage}/>
        <aside>
            {gameOver ? (<Display gameOver={gameOver} text="GAME OVER"/>):
        (
            <div>
            <Display text = "SCORE" />
            <Display text = "ROWS" />
            <Display text = "LEVEL" />
            </div>
        )}
            <StartButton callback={startGame}/>
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>

    );
}


export default Tetris;