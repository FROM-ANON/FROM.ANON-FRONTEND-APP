// Footer.tsx
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Img } from './Img';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { StyledLink } from './Link';

export const Footer = () => {
  return (
    <Container>
      <RowContainer>
        <Img source={require('/path/to/logotext.png')} width={102} height={23} alt="logo text" />
        <Bar />
        <StyledLink to="/login/terms/privacy-policy">
          <Typo.b4>개인정보처리방침</Typo.b4>
        </StyledLink>
        <Bar />
        <StyledLink to="/login/terms/use-policy">
          <Typo.b4>이용약관</Typo.b4>
        </StyledLink>
      </RowContainer>
      <RowContainer>
        <Typo.s4>이메일 : from.anonnn@gmail.com</Typo.s4>
        <Bar />
        <Typo.s4>Instagram : @from_anon</Typo.s4>
      </RowContainer>
      <RowContainer>
        <Typo.s4>©FROM.ANON. ALL RIGHTS RESERVED</Typo.s4>
        <Bar />
        <Typo.s4>ver 1.0</Typo.s4>
      </RowContainer>
    </Container>
  );
};

const Container = styled(View)`
  height: 94px;
  justify-content: center;
  padding-left: 21px;
  background: ${Palette.White};
`;

const RowContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Bar = styled(View)`
  width: 1px;
  height: 15px;
  background: ${Palette.Black};
`;

// Assuming you have a generic Img component that handles images in a consistent way
// If not, you can use the built-in Image component from 'react-native'
