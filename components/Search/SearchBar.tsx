// SearchBar.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import search from 'assets/icons/search.svg';
import { Palette } from 'styles/Palette';
import deleteSearch from 'assets/icons/delete-search.svg';
import { Img } from 'components/common/Img';

interface SearchBarProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({
  text,
  setText,
  setIsSearched,
  setSearchText,
}: SearchBarProps) => {
  const toggleSearched = () => {
    setIsSearched(true);
    setSearchText(text);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<TextInput | any>
  ) => {
    if (event.key === 'Enter') {
      toggleSearched();
    }
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const handleDeleteText = () => {
    setText('');
  };

  return (
    <Container>
      <RowContainer>
        <Img
          src={search}
          width={16.43}
          height={16.43}
          alt="search icon"
        />
        <SearchInput
          value={text}
          onChangeText={handleTextChange}
          onKeyPress={handleKeyPress}
          placeholder="인스타그램 아이디를 입력하세요."
        />
      </RowContainer>
      {text && (
        <Img
          src={deleteSearch}
          onPress={handleDeleteText}
          width={20}
          height={20}
          alt="deleted search text"
        />
      )}
    </Container>
  );
};

const Container = styled(View)`
  flex-direction: row;
  width: 327px;
  height: 37px;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 5px 15px;
  border-radius: 12px;
  background-color: ${Palette.Gray05};
`;

const RowContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 14px;
`;

const SearchInput = styled(TextInput)`
  flex: 1;
  font-size: 12px;
`;
