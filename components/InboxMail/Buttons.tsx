// Buttons.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyledButton } from 'components/common/Button';
import { Column } from 'components/common/Div';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import styled from 'styled-components/native'; // styled-components를 react-native 버전으로 import
import { Confirm } from 'components/common/modal/Confirm';
import { Toast } from 'components/common/Toast';
import { mailType } from 'types';
import { alertOpenState } from 'recoil/atom';
import { useRecoilState } from 'recoil';
import { Alert } from 'components/common/modal/Alert';

export const Buttons = ({ mail }: { mail: mailType | undefined }) => {
  const [alertState, setAlertState] = useRecoilState(alertOpenState);
  const handleStoryAnswerBtnClick = () => {
    setAlertState({ isOpen: true });
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleReportClick = () => {
    setIsModalOpen(true);
  };

  const [toast, setToast] = useState<boolean>(false);
  const [isConfirmedToReport, setIsConfirmedToReport] = useState<boolean>(false);

  useEffect(() => {
    if (isConfirmedToReport) {
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 2000);

      setIsConfirmedToReport(false);
    }
  }, [isConfirmedToReport]);

  return (
    <Column gap={17} alignItems="center">
      <StyledButton
        onPress={handleStoryAnswerBtnClick} // onClick 대신 onPress를 사용
        color="var(--linear_gradient, linear-gradient(90deg, rgba(255, 214, 0, 0.90) 0%, rgba(255, 122, 0, 0.90) 24.48%, rgba(255, 0, 105, 0.90) 39.58%, rgba(211, 0, 197, 0.90) 60.42%, rgba(118, 56, 250, 0.90) 79.69%))"
      >
        <Typo.b3 color={Palette.White}>인스타그램 스토리로 답장하기</Typo.b3>
      </StyledButton>
      <StyledButton color={Palette.Gray05} onPress={handleReportClick}>
        <Typo.b3 color={Palette.Gray50}>신고하기</Typo.b3>
      </StyledButton>
      {alertState.isOpen && <Alert text="해당 기능은 앱에서만 제공됩니다." />}
      {isModalOpen && (
        <Confirm
          text="편지를 신고하시겠습니까?"
          type="report"
          setIsModalOpenState={setIsModalOpen}
          setIsConfirmedToAction={setIsConfirmedToReport}
          mailId={mail?.mailId}
        />
      )}
      <Toast show={toast} text="신고되었습니다." />
    </Column>
  );
};
