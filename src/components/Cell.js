import React from  'react';
import { StyledCell } from './styles/StyledCell';
import { TETRIMINOES } from '../tetrominoes';
const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETRIMINOES['L'].color}>cell</StyledCell>
)

export default Cell;