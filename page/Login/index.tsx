import { StyledButton } from "components/common/Button";
import { Column } from "components/common/Div";
import { Img } from "components/common/Img";
import { StyledLink } from "components/common/Link";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import styled from "styled-components";
export const Login = () => {
    // URL for obtaining Instagram authorization code
    const getAuthCodeUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTA_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_INSTA_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;

    return (
        <Container gap={217.32}>
            {/* Logo and LogoText components within a column container */}
            <Column gap={16.81} alignItems="center">
                <Img src="/logo.svg" width={132.59} height={146.86} alt="Logo" />
                <Img src="logotext.svg" width={169} height={38} alt="LogoText" />
            </Column>
            {/* Login and "Login without Logging In" buttons within a column container */}
            <Column alignItems="center" gap={17}>
                {/* StyledLink wrapping StyledButton for Instagram login */}
                <StyledLink to={getAuthCodeUrl}>
                    <StyledButton color="var(--linear_gradient, linear-gradient(90deg, rgba(255, 214, 0, 0.90) 0%, rgba(255, 122, 0, 0.90) 24.48%, rgba(255, 0, 105, 0.90) 39.58%, rgba(211, 0, 197, 0.90) 60.42%, rgba(118, 56, 250, 0.90) 79.69%))">
                        <Typo.b3 color={Palette.White}>인스타그램 아이디로 로그인</Typo.b3>
                    </StyledButton>
                </StyledLink>
                {/* StyledLink for "Login without Logging In" */}
                <StyledLink to="/send">
                    <u>
                        <Typo.b4>로그인 하지 않고 시작</Typo.b4>
                    </u>
                </StyledLink>
            </Column>
        </Container>
    );
};
