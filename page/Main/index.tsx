import React from 'react';
import { View } from 'react-native';
import { Menus } from '../../components/Main/Menus';
import { Column } from "../../components/common/Div";
import { Header } from '../../components/common/Header';
import { Footer } from '../../components/common/Footer';
import { LogoutOrDelUser } from '../../components/Main/LogoutOrDelUser';
import styled from 'styled-components/native'; // styled-components를 react-native 버전으로 가져옴

export const Main = () => {
  return (
    <Container
      style={{
        backgroundColor: 'var(--linear_gradient, linear-gradient(173.93deg,#F9DDAA 4.81%, #EDE2CD 100%))',
        gap: 25,
      }}
    >
      <Header type="main" />
      <Menus />
      <Column>
        <LogoutOrDelUser type="logout" />
        <LogoutOrDelUser type="delUser" />
      </Column>
      <Footer />
    </Container>
  );
};

const Container = styled(View)`
  height: 100%;
`;
