// Link.tsx
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import chain from 'assets/icons/chain.svg';
import { getUserByTokenApi } from 'network/apis/userApis';
import { AxiosResponse } from 'axios';
import { handleError } from 'functions';

export const Link = () => {
  const [user, setUser] = useState<any>(); // userType으로 정의된 타입이 없어 any로 처리하였습니다.
  useEffect(() => {
    const getUser = async () => {
      try {
        let res: AxiosResponse<any> = await getUserByTokenApi();
        setUser(res?.data);
      } catch (err) {
        handleError(err);
      }
    };
    getUser();
  }, []);

  const handleClickButton = () => {
    try {
      const textToCopy = `https://from-anon.vercel.app/${user?.instaId}`;
      // Copy text to clipboard (React Native does not have execCommand)
      // Clipboard.setString(textToCopy); // Uncomment when using expo-clipboard

      console.log('Copied to clipboard:', textToCopy);
    } catch (error) {
      console.error('Clipboard copy error:', error);
    }
  };

  return (
    <>
      {user !== undefined && (
        <RowContainer>
          <LinkAddress>
            <Image source={chain} style={{ width: 20, height: 20 }} />
            <StyledText color={Palette.Gray60}>
              https://from-anon.vercel.app/{user?.instaId}
            </StyledText>
          </LinkAddress>
          <Button onPress={handleClickButton}>
            <StyledText color={Palette.Gray60}>복사</StyledText>
          </Button>
        </RowContainer>
      )}
    </>
  );
};

const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const LinkAddress = styled.View`
  width: 225px;
  height: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  border-radius: 12px;
  background-color: ${Palette.Gray05};
`;

const Button = styled(TouchableOpacity)`
  width: 41px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${Palette.Gray20};
`;

const StyledText = styled(Typo.s4)`
  color: ${(props) => props.color};
`;

