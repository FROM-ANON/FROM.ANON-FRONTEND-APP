// Menus.tsx
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Column } from 'components/common/Div';
import { Menu } from './Menu';

export const Menus = () => {
  return (
    <Container>
      <Menu to="/inbox">받은 편지함</Menu>
      <Menu to="https://www.instagram.com/" underComponent={true}>
        편지함 링크 공유하기
      </Menu>
      <Menu to="/send">편지 보내기</Menu>
      <Menu to="/mailpaper">편지지</Menu>
    </Container>
  );
};

const Container = styled(Column)`
  gap: 15px;
  padding: 0 27px;
  elevation: 5; /* Android에서 그림자 효과를 주려면 elevation을 사용합니다. */
`;
