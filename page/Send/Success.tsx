// Success.tsx
import React from 'react';
import { View } from 'react-native';
import { StyledButton } from 'components/common/Button';
import { Column } from 'components/common/Div';
import { Img } from 'components/common/Img';
import { StyledLink } from 'components/common/Link';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

const Success = () => {
    return (
        <Column style={{ paddingTop: 116 }} justifyContent="center" gap={131.32}>
            <Column gap={50} alignItems="center">
                <Column gap={7} alignItems="center">
                    <Img
                        src="/logo.svg"
                        width={132.59}
                        height={146.86}
                        alt="logo"
                    />
                    <Img
                        src="/logotext.svg"
                        width={169}
                        height={38}
                        alt="logo text"
                    />
                </Column>
                <Typo.h3>편지가 전송되었습니다.</Typo.h3>
            </Column>
            <Column alignItems="center" gap={17}>
                <StyledLink to="/send">
                    <StyledButton color={Palette.Mandarin}>
                        <Typo.b3 color={Palette.White}>
                            다른 편지 보내기
                        </Typo.b3>
                    </StyledButton>
                </StyledLink>
                <StyledLink to="/main">
                    <StyledButton color={Palette.Gray05}>
                        <Typo.b3 color={Palette.Gray50}>홈으로 가기</Typo.b3>
                    </StyledButton>
                </StyledLink>
            </Column>
        </Column>
    );
};

export default Success;
