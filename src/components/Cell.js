import React from  'react';
import { StyledCell } from './styles/StyledCell';
import { TETRIMINOES } from '../tetrominoes';
const Cell = ({ type }) => (
    <StyledCell type={type} color={TETRIMINOES[type].color}>{console.log("rerender")}</StyledCell>
)

export default React.memo(Cell);

//The optiization done here at this point reduces the rewrites when rendering