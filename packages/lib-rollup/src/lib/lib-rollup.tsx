import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LibRollupProps {}

const StyledLibRollup = styled.div`
  color: pink;
`;

export function LibRollup(props: LibRollupProps) {
  return (
    <StyledLibRollup>
      <h1>Welcome to LibRollup!</h1>
    </StyledLibRollup>
  );
}

export default LibRollup;
