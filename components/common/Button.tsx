// Button.tsx
import styled from 'styled-components/native';
import { View } from 'react-native';

interface ButtonProps {
  color: string;
  borderClr?: string;
}

export const StyledButton = styled(View)<ButtonProps>`
  width: 300px;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: ${(props) => `1px solid ${props.borderClr || 'transparent'}`};
  background-color: ${({ color }) => color};

  /* For touch feedback */
  touch-action: manipulation;
`;

// Note: In React Native, touch feedback is usually handled automatically.
// 'touch-action: manipulation;' is added for more consistent behavior across platforms.
