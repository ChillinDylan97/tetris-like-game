import React from  'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
return (
    <div>
        <Stage />
        <aside>
            <div>
            <Display text = "SCORE" />
            <Display text = "ROWS" />
            <Display text = "LEVEL" />
            </div>
            <StartButton />
        </aside>

    </div>

    )
}


export default Tetris;