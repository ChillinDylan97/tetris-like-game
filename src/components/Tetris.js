import React from  'react';
import { createStage } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
return (
    <StyledTetrisWrapper>
        <StyledTetris>
        <Stage stage={createStage()}/>
        <aside>
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