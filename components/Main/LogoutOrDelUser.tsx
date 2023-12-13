// LogoutOrDelUser.tsx
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Row } from 'components/common/Div';
import logout from 'assets/icons/logout.svg';
import delUser from 'assets/icons/del-user.svg';
import Typo from 'styles/Typo';
import { Img } from 'components/common/Img';
import { Palette } from 'styles/Palette';
import styled from 'styled-components/native';
import { Confirm } from 'components/common/modal/Confirm';

export const LogoutOrDelUser = ({ type }: { type: string }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmedToDelete, setIsConfirmedToDelete] = useState<boolean>(false);
  const typeIdx: number = type === 'logout' ? 0 : 1;

  const handleLogout = () => {
    // React Native에서는 window 객체가 없으므로, 대체할 수 있는 로직이 필요합니다.
    // 예를 들어, AsyncStorage를 사용하여 로그아웃 상태를 저장하고 로그인 화면으로 이동할 수 있습니다.
    console.log('Logout logic goes here');
  };

  const handleDelUser = async () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    // 회원탈퇴 확인 클릭시 로그인 화면으로 이동
    if (isConfirmedToDelete) {
      // React Native에서는 navigation을 사용하여 화면 전환을 처리합니다.
      console.log('Navigate to login screen');
    }
  }, [isConfirmedToDelete]);

  const typeState = [
    { text: '로그아웃', src: logout, onClick: handleLogout },
    { text: '회원탈퇴', src: delUser, onClick: handleDelUser },
  ];

  return (
    <Container justifyContent="flex-end" alignItems="center" gap={11}>
      <Typo.s2 color={Palette.Gray50}>{typeState[typeIdx].text}</Typo.s2>
      <Img
        src={typeState[typeIdx].src}
        width={14}
        height={14}
        onPress={typeState[typeIdx].onClick} // React Native에서는 onPress를 사용합니다.
        alt="icon"
      />
      {isModalOpen && (
        <Confirm
          text="회원 탈퇴하시겠습니까? 모든 데이터가 영구 삭제됩니다."
          type="delUser"
          setIsModalOpenState={setIsModalOpen}
          setIsConfirmedToAction={setIsConfirmedToDelete}
        />
      )}
    </Container>
  );
};

const Container = styled(Row)`
  padding: 5px 31px;
`;
