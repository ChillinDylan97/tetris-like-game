import styled from "styled-components";
export const StyledCell = styled.div`
    width: auto;
    background: rgba(${props => props.color}, 0.8);
    border: ${props => props.type === 0 ? '0px solid': '4px solid'};
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-right-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 0.3);
`
// lines 5-9 provide a shadow effect to the blocks
// for future reference, line 5 is an example of a ternary operator (?) and the alpha values are so I can get different opacity levels on the blocks