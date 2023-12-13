// Alert.tsx
import React from 'react';
import { View } from 'react-native';
import { alertOpenState } from 'recoil/atom';
import { useSetRecoilState } from 'recoil';
import Modal from './Modal';

export const Alert = ({ text }: { text: string }) => {
  const setIsOpen = useSetRecoilState(alertOpenState);

  const handleClick = () => {
    setIsOpen({ isOpen: false });
  };

  return (
    <Modal.backdrop>
      <Modal.modalcontainer>
        <Modal.message text={text} />
        <Modal.alertbutton onClick={handleClick} />
      </Modal.modalcontainer>
    </Modal.backdrop>
  );
};

// Note: 이 코드에서는 Modal 컴포넌트의 alertbutton이 TouchableOpacity로 구현되어 있다고 가정하고 있습니다.
