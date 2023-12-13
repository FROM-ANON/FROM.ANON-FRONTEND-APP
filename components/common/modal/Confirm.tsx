// Confirm.tsx
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Modal from './Modal';
import { deleteMailApi, reportMailApi } from 'network/apis/mailApis';
import { useNavigation } from '@react-navigation/native'; // React Navigation을 사용할 경우
import { delUserApi } from 'network/apis/userApis';

export const Confirm = ({
  text,
  type,
  setIsModalOpenState,
  setIsConfirmedToAction,
  mailId,
}: {
  text: string;
  type: string;
  setIsModalOpenState: React.Dispatch<React.SetStateAction<any>>;
  setIsConfirmedToAction?: React.Dispatch<React.SetStateAction<boolean>>;
  mailId?: number;
}) => {
  const navigation = useNavigation(); // React Navigation을 사용할 경우

  // handleClick
  const handleLeftClick = () => {
    setIsModalOpenState(false);
  };

  const handleRightClick = async () => {
    switch (type) {
      case 'delete':
        await handleDelete();
        break;
      case 'delUser':
        await handleDelUser();
        break;
      case 'report':
        await handleReport();
        break;
      case 'proUpgrade':
        handleProUpgrade();
        break;
    }
    setIsModalOpenState(false);
  };

  // delete, report, upgrade
  const handleDelete = async () => {
    if (mailId) {
      try {
        // 편지 삭제
        await deleteMailApi(mailId);
        // 성공 시
        if (setIsConfirmedToAction !== undefined) setIsConfirmedToAction(true);
      } catch (err) {
        // 실패 시
        console.error('Delete failed:', err);
      }
    }
  };

  const handleDelUser = async () => {
    try {
      // 유저 삭제
      let res = await delUserApi();
      // 성공 시
      if (setIsConfirmedToAction !== undefined && res?.status === 200)
        setIsConfirmedToAction(true);
    } catch (err) {
      // 실패 시
      console.error('Delete failed:', err);
    }
  };

  const handleReport = async () => {
    if (mailId) {
      try {
        // 편지 삭제
        await reportMailApi(mailId);
        // 성공 시
        if (setIsConfirmedToAction !== undefined) setIsConfirmedToAction(true);
      } catch (err) {
        // 실패 시
        console.error('Report failed:', err);
      }
    }
  };

  const handleProUpgrade = () => {
    navigation.navigate('Pro'); // React Navigation을 사용할 경우
  };

  return (
    <Modal.backdrop>
      <Modal.modalcontainer>
        <Modal.message text={text} />
        <Modal.confirmbutton onLeftClick={handleLeftClick} onRightClick={handleRightClick} />
      </Modal.modalcontainer>
    </Modal.backdrop>
  );
};

// Note: 이 코드에서는 React Navigation을 사용하는 것을 전제로 하고 있습니다. 실제 사용하는 라우팅 라이브러리에 따라 적절한 코드로 변경하세요.
