// InstaIdInfo.tsx
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { userType } from 'types';

export const InstaIdInfo = ({
  user,
  isClicked,
  onClick,
}: {
  user: userType;
  isClicked: boolean;
  onClick: () => void;
}) => {
  return (
    <Container isClicked={isClicked}>
      <TouchableOpacity onPress={onClick}>
        <ProfileImg isClicked={isClicked} />
      </TouchableOpacity>
      <Info>
        <Typo.b3>{user.instaId}</Typo.b3>
      </Info>
    </Container>
  );
};

const Container = styled(View)<{ isClicked: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 7px;
  background-color: ${(props) =>
    props.isClicked ? Palette.Mandarin20 : Palette.White};
`;

const ProfileImg = styled(View)<{ isClicked: boolean }>`
  width: 49px;
  height: 49px;

  border-radius: 50%;
  background-color: ${(props) =>
    props.isClicked ? Palette.Mandarin : Palette.Gray05};
`;

const Info = styled(View)`
  width: 217px;
`;
