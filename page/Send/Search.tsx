// Search.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'components/Search/SearchBar';
import { SearchResult } from 'components/Search/SearchResult';
import { Column } from 'components/common/Div';
import { Header } from 'components/common/Header';

const Search = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [text, setText] = useState('');
    const [searchText, setSearchText] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Header type="sub" text="편지 보내기" />
            <Column gap={40} alignItems="center" justifyContent="flex-start">
                <SearchBar
                    text={text}
                    setText={setText}
                    setIsSearched={setIsSearched}
                    setSearchText={setSearchText}
                />
                {isSearched && (
                    <SearchResult key={searchText} searchText={searchText} />
                )}
            </Column>
        </View>
    );
};

export default Search;
