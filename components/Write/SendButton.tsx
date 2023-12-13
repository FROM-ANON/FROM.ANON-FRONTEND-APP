// SendButtons.tsx
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import Typo from 'styles/Typo';
import { useRecoilState } from 'recoil';
import { WriteMailState, alertOpenState } from 'recoil/atom';
import { Palette } from 'styles/Palette';
import { Row } from 'components/common/Div';
import { useNavigation } from '@react-navigation/native';
import { postMailApi } from 'network/apis/mailApis';
import { gptCheckContentApi } from 'network/apis/chatgptApi';
import { Alert } from 'components/common/modal/Alert';
import { handleError } from 'functions';

export const SendButton = () => {
  const navigation = useNavigation();
  const [writeState, setWriteState] = useRecoilState(WriteMailState);
  const [alertState, setAlertState] = useRecoilState(alertOpenState);

  const handleClick = async () => {
    try {
      await gptCheckContentApi({ content: writeState.text });
      // 비방성 또는 성희롱성 글이 아닌 경우
      try {
        await postMailApi({
          // 메일 전송
          instaId: writeState.instaId,
          mailPaperId: writeState.mailPaperId,
          text: writeState.text,
        });
        // 메일 전송 성공
        // WriteMailState 초기화
        setWriteState({
          instaId: '',
          mailPaperId: 1,
          text: '',
        });
        navigation.navigate('/send/success');
      } catch (err) {
        handleError(err);
      }
    } catch (err) {
      const status = handleError(err);
      if (status === 406) {
        // 비방성 또는 성희롱성 글인 경우
        setAlertState({ isOpen: true });
      }
    }
  };

  return (
    <Container>
      <Button isEmpty={!writeState.text} onPress={handleClick}>
        <Typo.b3>전송하기</Typo.b3>
      </Button>
      {alertState.isOpen && (
        <Alert text="ChatGPT가 부적절한 내용으로 판단하였습니다. 다시 작성해 주세요."></Alert>
      )}
    </Container>
  );
};

const Container = styled(View)`
  width: 100%;
  padding: 37px 0;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0;
`;

const Button = styled(TouchableOpacity)<{ isEmpty: boolean }>`
  background: ${(props) => (props.isEmpty ? Palette.Gray05 : Palette.Mandarin)};
  color: ${(props) => (props.isEmpty ? Palette.Gray50 : Palette.White)};
  cursor: ${(props) => (props.isEmpty ? 'default' : 'pointer')};
`;
