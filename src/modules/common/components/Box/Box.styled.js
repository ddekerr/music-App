import styled from 'styled-components';
import { space, layout, color, border, flexbox } from 'styled-system';


const Box = styled.div`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
`;

const Flex = styled.div`
  ${flexbox}
`


export default {Box, Flex};