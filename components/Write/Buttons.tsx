// Buttons.tsx
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { Confirm } from 'components/common/modal/Confirm';
import { useNavigation } from '@react-navigation/native';

export const Buttons = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigation = useNavigation();

  const handleWritePaperClick = () => {
    navigation.navigate('MailPaper'); // Assuming 'MailPaper' is the correct screen name in your navigation setup
  };

  const handleAttachPicClick = () => {
    setIsModalOpen(true);
  };

  return (
    <RowContainer>
      <Button onPress={handleWritePaperClick}>
        <Typo.s2 color={Palette.Gray60}>편지지 선택하기</Typo.s2>
      </Button>
      <Button onPress={handleAttachPicClick}>
        <Typo.s2 color={Palette.Gray60}>사진 첨부하기</Typo.s2>
      </Button>
      {isModalOpen && (
        <Confirm
          text="해당 기능은 프로버전에서만 제공됩니다. 지금 업그레이드 하시겠습니까?"
          type="proUpgrade"
          setIsModalOpenState={setIsModalOpen}
        ></Confirm>
      )}
    </RowContainer>
  );
};

const RowContainer = styled(View)`
  flex-direction: row;
  gap: 10px;
`;

const Button = styled(TouchableOpacity)`
  width: 110px;
  height: 43px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: ${Palette.Gray05};

  cursor: pointer;
`;
