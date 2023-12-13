// ToggleMenu.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Row } from './Div';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

interface ToggleMenuProps {
  menu1: string;
  menu2: string;
  menu1Len: number | undefined;
  menu2Len: number | undefined;
  setToggleMenu: React.Dispatch<React.SetStateAction<number>>;
}

export const ToggleMenu = ({ menu1, menu2, menu1Len, menu2Len, setToggleMenu }: ToggleMenuProps) => {
  const [menuClicked, setMenuClicked] = useState<number | null>(null);

  const handleClickMenu1 = () => {
    setMenuClicked(0);
    setToggleMenu(0);
  };

  const handleClickMenu2 = () => {
    setMenuClicked(1);
    setToggleMenu(1);
  };

  return (
    <Container>
      <TextRow onPress={handleClickMenu1}>
        <Typo.s2 color={menuClicked === 0 ? Palette.Black : Palette.Gray40}>{menu1}</Typo.s2>
        <Typo.s2 color={menuClicked === 0 ? Palette.Mandarin : Palette.Gray40}>
          &nbsp;{menu1Len === undefined ? 0 : menu1Len}
        </Typo.s2>
      </TextRow>
      <TextRow onPress={handleClickMenu2}>
        <Typo.s2 color={menuClicked === 1 ? Palette.Black : Palette.Gray40}>{menu2}</Typo.s2>
        <Typo.s2 color={menuClicked === 1 ? Palette.Mandarin : Palette.Gray40}>
          &nbsp;{menu2Len === undefined ? 0 : menu2Len}
        </Typo.s2>
      </TextRow>
    </Container>
  );
};

const Container = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  background-color: ${Palette.White};
  padding: 11px 42px;
  gap: 15px;
`;

const TextRow = styled(TouchableOpacity)`
  display: flex;
`;

// Note: 이 코드에서는 TouchableOpacity를 사용하여 터치 이벤트를 처리하고 있습니다.
