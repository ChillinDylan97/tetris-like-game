import React from  'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominoes';
const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color}>{console.log("rerender cell")}</StyledCell>
);

export default React.memo(Cell);

//The optiization done here at this point reduces the rewrites when rendering