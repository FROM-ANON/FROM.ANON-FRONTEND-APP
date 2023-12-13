// Toast.tsx
import React from 'react';
import { View, Text, Animated } from 'react-native';
import styled from 'styled-components/native';
import Typo from 'styles/Typo';
import { Palette } from 'styles/Palette';

export const Toast = ({ text, show }: { text: string; show: boolean }) => {
  const opacity = new Animated.Value(show ? 1 : 0);

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: show ? 1 : 0,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [show]);

  return (
    <Container style={{ opacity }}>
      <Typo.b4 color={Palette.White}>{text}</Typo.b4>
    </Container>
  );
};

const Container = styled(Animated.View)`
  width: 100%;
  height: 41px;
  align-items: center;
  justify-content: flex-start;

  margin: 0 23px;
  padding: 0 16px;

  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.45);

  position: absolute;
  bottom: 30px;
  left: 0;
  z-index: 100000000;
`;

// Note: React Native uses Animated API for animations, and 'position: fixed;' is replaced with 'position: absolute;'
