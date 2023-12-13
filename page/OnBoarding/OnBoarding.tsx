// OnBoarding.tsx
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
    const [idx, setIdx] = useState<number>(0);
    const [indicatorState, setIndicatorState] = useState([
        {
            isFocused: true,
            content: (
                <>
                    <Typo.h2>익명으로</Typo.h2>
                    <Typo.h1 color={Palette.Mandarin}>마음을 전달하는</Typo.h1>
                    <Typo.h2>편지</Typo.h2>
                </>
            ),
        },
        {
            isFocused: false,
            content: (
                <>
                    <Typo.h1 color={Palette.Mandarin}>
                        나만의 편지함 링크를
                    </Typo.h1>
                    <Typo.h1 color={Palette.Mandarin}>공유하고</Typo.h1>
                    <Typo.h2>편지를 받아보세요</Typo.h2>
                </>
            ),
        },
        {
            isFocused: false,
            content: (
                <>
                    <Typo.h2>나쁜 편지는</Typo.h2>
                    <Typo.h1 color={Palette.Mandarin}>ChatGPT를 통해</Typo.h1>
                    <Typo.h2>필터링됩니다</Typo.h2>
                </>
            ),
        },
        {
            isFocused: false,
            content: (
                <>
                    <Typo.h1 color={Palette.Mandarin}>나의 스토리에</Typo.h1>
                    <Typo.h2>전달받은 마음을</Typo.h2>
                    <Typo.h1 color={Palette.Mandarin}>답해보세요</Typo.h1>
                </>
            ),
        },
    ]);
    const navigation = useNavigation();

    const handleClickBtn = () => {
        if (idx <= 2) {
            setIdx(idx + 1);
        } else {
            navigation.navigate('Login');
        }
    };

    useEffect(() => {
        setIndicatorState((prevState) =>
            prevState.map((state, index) =>
                index === idx
                    ? { ...state, isFocused: true }
                    : { ...state, isFocused: false }
            )
        );
    }, [idx]);

    return (
        <Container>
            <Column>
                <Column>
                    <Img
                        source={require('/logo.svg')}
                        width={104.2}
                        height={115.42}
                        alt="logo img"
                    />
                    <Img
                        source={require('/logotext.svg')}
                        width={102}
                        height={23}
                        alt="logo text"
                    />
                </Column>
                <Column>
                    <Column>{indicatorState[idx].content}</Column>
                    <Row>
                        {indicatorState.map((indicator, index) => (
                            <Circle
                                key={index}
                                isFocused={indicator.isFocused}
                            />
                        ))}
                    </Row>
                </Column>
            </Column>
            <Column>
                <StyledButton
                    color={Palette.Mandarin}
                    onPress={handleClickBtn}
                >
                    <Typo.b3 color={Palette.White}>
                        {idx === 3 ? '시작하기' : '다음'}
                    </Typo.b3>
                </StyledButton>
                <StyledLink to="/login">
                    <Row>
                        <Typo.s2>이미 계정이 있으신가요? </Typo.s2>
                        <Typo.s2 color={Palette.Mandarin}>
                            &nbsp; 바로 로그인하세요
                        </Typo.s2>
                    </Row>
                </StyledLink>
            </Column>
        </Container>
    );
};

const Container = styled(View)`
    justify-content: center;
    align-items: center;
    padding-top: 116px;
`;
const Circle = styled(View)<{ isFocused: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) =>
        props.isFocused ? Palette.Black : Palette.Gray20};
`;
