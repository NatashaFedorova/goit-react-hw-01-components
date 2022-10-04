import styled from 'styled-components';

export const Container = styled.div`
  /* outline: 1px solid red; */
  width: 500px;
  padding: 0 ${props => props.theme.spacing(4)};
  margin: 0 auto;
`;
