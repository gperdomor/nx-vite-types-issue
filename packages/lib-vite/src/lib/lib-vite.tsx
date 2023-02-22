import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LibViteProps {}

const StyledLibVite = styled.div`
  color: pink;
`;

export function LibVite(props: LibViteProps) {
  return (
    <StyledLibVite>
      <h1>Welcome to LibVite!</h1>
    </StyledLibVite>
  );
}

export default LibVite;
