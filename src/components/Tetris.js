import React, { useState } from  'react';
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
return (
    <StyledTetrisWrapper>
        <StyledTetris>
        <Stage stage={stage()}/>
        <aside>
            {gameOver >}
            <div>
            <Display text = "SCORE" />
            <Display text = "ROWS" />
            <Display text = "LEVEL" />
            </div>
            <StartButton />
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>

    );
}


export default Tetris;