// Img.tsx
import styled from 'styled-components/native'; // styled-components를 react-native 버전으로 가져옴

interface ImgProps {
  width: number;
  height: number;
}

export const Img = styled.Image<ImgProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;

// Assuming you have a generic Image component that handles images in a consistent way
// If not, you can use the built-in Image component from 'react-native'
