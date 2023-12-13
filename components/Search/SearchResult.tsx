// SearchResult.tsx
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { InstaIdInfo } from './InstaIdInfo';
import { useNavigate } from 'react-router-dom';
import { searchApi } from 'network/apis/userApis';
import { userType } from 'types';
import { AxiosResponse } from 'axios';
import { handleError } from 'functions';

export const SearchResult = ({ searchText }: { searchText: string }) => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState<
    { user: userType; isClicked: boolean }[]
  >([]);

  useEffect(() => {
    const search = async () => {
      try {
        let res: AxiosResponse<userType[]> | undefined = await searchApi(
          searchText
        );
        if (res !== undefined) {
          setUserList(
            res?.data.map((user: userType) => ({
              user: user,
              isClicked: false,
            }))
          );
        }
      } catch (err) {
        handleError(err);
      }
    };
    search();
  }, [searchText]);

  const handleClickId = (id: number) => {
    const updated = userList.map((user) => ({
      ...user,
      isClicked:
        id === user.user.instaUserId ? !user.isClicked : user.isClicked,
    }));
    setUserList(updated);
  };

  const handleSendBtn = () => {
    const clickedUser = userList.find((user) => user.isClicked === true);
    if (clickedUser) {
      navigate(`/send/write/${clickedUser.user.instaId}`);
    }
  };

  return (
    <Container>
      <Column alignItems="center">
        {userList.map((user, index) => (
          <InstaIdInfo
            key={index}
            user={user.user}
            isClicked={user.isClicked}
            onClick={() => handleClickId(user.user.instaUserId)}
          />
        ))}
      </Column>
      <SendBtn
        onPress={handleSendBtn}
        color={
          userList.some((user) => user.isClicked)
            ? Palette.Mandarin
            : Palette.Gray05
        }
        isClicked={userList.some((user) => user.isClicked)}
      >
        <Typo.b3
          color={
            userList.some((user) => user.isClicked)
              ? Palette.White
              : Palette.Gray50
          }
        >
          메세지 보내기
        </Typo.b3>
      </SendBtn>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  align-items: center;
`;

const SendBtn = styled(TouchableOpacity)<{ isClicked: boolean }>`
  position: absolute;
  bottom: 37px;
  cursor: ${(props) => !props.isClicked && 'default'};
`;
