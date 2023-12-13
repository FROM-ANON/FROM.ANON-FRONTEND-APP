// Notice.tsx
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

export const Notice = ({ text }: { text: string }) => {
  return (
    <Container>
      <Typo.s2 color={Palette.Gray50}>{text}</Typo.s2>
    </Container>
  );
};

const Container = styled(View)`
  width: 100%;
  height: 31px;
  align-items: center;
  justify-content: flex-start;

  padding: 0 63px;
  background-color: ${Palette.Gray10};
`;

// Note: In React Native, 'vw' units are not supported. I changed it to use '100%' for width.
