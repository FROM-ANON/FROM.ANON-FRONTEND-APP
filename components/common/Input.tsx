// Input.tsx
import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  border: none;
  background-color: transparent;

  font-family: PretendardMedium;
  line-height: 150%;

  &:focus {
    outline: none;
  }
`;

export const StyledTextarea = styled.TextInput`
  border: none;
  background-color: transparent;

  font-family: PretendardMedium;
  line-height: 150%;

  resize-mode: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

// Note: React Native TextInput doesn't have a 'resize' prop, so 'resize-mode' is not needed.
