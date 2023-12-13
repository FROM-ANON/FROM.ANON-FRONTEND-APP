// TextInputBox.tsx
import React, { useEffect, useRef } from 'react';
import { View, TextInput as RNTextInput } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import { WriteMailState } from 'recoil/atom';
import { useRecoilState } from 'recoil';

export const TextInputBox = () => {
  const [writeState, setWriteState] = useRecoilState(WriteMailState);

  const handleTextChange = (newText: string) => {
    setWriteState({ ...writeState, text: newText });
  };

  const textareaRef = useRef<RNTextInput | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.setNativeProps({
        height: scrollHeight,
      });
    }
  }, [writeState.text]);

  return (
    <Container>
      <TextInput
        ref={textareaRef}
        value={writeState.text}
        onChangeText={handleTextChange}
        placeholder="익명의 메세지를 작성해보세요."
        multiline
      />
    </Container>
  );
};

const Container = styled(View)`
  width: 300px;
  min-height: 300px;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  border-radius: 25px;
  border: 1px solid ${Palette.Gray10};
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);
`;

const TextInput = styled(RNTextInput)`
  width: 100%;
  font-size: 12px;
  border: none;
  padding: 0;
  margin: 0;
`;
