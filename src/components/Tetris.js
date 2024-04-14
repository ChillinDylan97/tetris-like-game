import React, { useState } from  'react';
import { createStage } from '../gameHelpers';
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
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

console.log('re-render');
const movePlayer = dir => {

}

const drop = () => {
    drop();
}

const dropPlayer = () => {
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

const move = ({ keyCode }) => {

}

return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <StyledTetris>
        <Stage stage={stage()}/>
        <aside>
            {gameOver ? (<Display gameOver={gameOver} text="Game Over"/>):
        (
            <div>
            <Display text = "SCORE" />
            <Display text = "ROWS" />
            <Display text = "LEVEL" />
            </div>
        )}
            <StartButton />
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>

    );
}


export default Tetris;