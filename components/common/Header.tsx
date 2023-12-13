// Header.tsx
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // react-router-dom 대신 react-navigation을 사용

import Typo from 'styles/Typo';
import { Row } from './Div';
import styled from 'styled-components/native';
import logotext from 'assets/logotext.png'; // Assuming you have a PNG version of the logo
import leftArrow from 'assets/icons/left-arrow.png'; // Assuming you have a PNG version of the left arrow
import { Img } from './Img';

export const Header = ({
  type,
  text,
  bgcolor,
}: {
  type: string;
  text?: string;
  bgcolor?: string;
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (type === 'sub') {
      navigation.navigate('Main'); // Assuming 'Main' is the name of your main screen
    } else {
      navigation.goBack();
    }
  };

  return (
    <>
      {type === 'main' ? (
        <Container
          justifyContent="center"
          alignItems="center"
          backgroundColor={bgcolor}
        >
          <Img source={logotext} width={102} height={23} alt="Logo" />
        </Container>
      ) : (
        <Container
          justifyContent="flex-start"
          alignItems="center"
          backgroundColor={bgcolor}
        >
          <Sub>
            <TouchableOpacity onPress={handleBack}>
              <Image
                source={leftArrow}
                style={{ width: 7, height: 12.6 }}
                resizeMode="contain"
              />
            </TouchableOpacity>

