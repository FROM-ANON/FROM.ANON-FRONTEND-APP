// Div.tsx
import styled from 'styled-components/native'; // styled-components를 react-native 버전으로 가져옴

interface DivProps {
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
}

export const Row = styled.View<DivProps>`
  flex-direction: row;
  width: 100%;

  gap: ${(props) => (props.gap ? `${props.gap}px` : 0)};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) => props.backgroundColor};
`;

export const Column = styled.View<DivProps>`
  flex-direction: column;
  width: 100%;

  gap: ${(props) => (props.gap ? `${props.gap}px` : 0)};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) => props.backgroundColor};
`;

export const PageContainer = styled(Column)`
  width: 100%;
  height: 100%;
`;

// PageContainer의 height가 100svh가 아니라 100%로 수정하였습니다.
