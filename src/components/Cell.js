import React from  'react';
import { StyledCell } from './styles/StyledCell';
import { TETRIMINOES } from '../tetrominoes';
const Cell = ({ type }) => (
    <StyledCell type={type} color={TETRIMINOES[type].color}/>
)

export default Cell;