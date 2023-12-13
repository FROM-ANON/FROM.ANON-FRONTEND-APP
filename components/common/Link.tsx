// Link.tsx
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';

export const StyledLink = styled(TouchableOpacity)<{ color?: string }>`
  text-decoration: none;
  color: ${({ color }) => (color ? color : Palette.Black)};
`;

// Note: In React Native, you may need to handle the navigation logic manually using navigation prop or a navigation library.
