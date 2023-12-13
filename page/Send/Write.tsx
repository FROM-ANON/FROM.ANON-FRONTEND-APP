// pro.tsx
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'components/common/Header';
import { Img } from 'components/common/Img';
import crown from 'assets/icons/crown.svg';
import Typo from 'styles/Typo';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import { StyledButton } from 'components/common/Button';
import grayCheck from 'assets/icons/gray-check.svg';
import { useRecoilState } from 'recoil';
import { alertOpenState } from 'recoil/atom';
import { Alert } from 'components/common/modal/Alert';

const Pro = () => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);

    const handleClick = () => {
        setAlertState({ isOpen: true });
    };

    return (
        <Container>
            <Header type="sub" />
            <View style={styles.container}>
                <Graybar>
                    <Image
                        source={crown}
                        style={{ width: 18, height: 15.3 }}
                        alt="crown icon"
                    />
                    <Typo.b1>Pro</Typo.b1>
                </Graybar>
                <View style={styles.contentContainer}>
                    <Container gap={30}>
                        <View style={styles.logoContainer}>
                            <Img
                                source={require('/logo.svg')}
                                style={{ width: 88.3, height: 97.8 }}
                                alt="logo"
                            />
                            <Img
                                source={require('/logotext.svg')}
                                style={{ width: 86, height: 20 }}
                                alt="logo text"
                            />
                        </View>
                        <View style={styles.benefitContainer}>
                            <View style={styles.benefitInfo}>
                                <Typo.s2 color="#FF4040">
                                    출시 기념 프로모션
                                </Typo.s2>
                                <View style={styles.priceContainer}>
                                    <Typo.big>월 $1</Typo.big>
                                    <Typo.h3 color={Palette.Gray40}>
                                        <s>$5</s>
                                    </Typo.h3>
                                </View>
                            </View>
                            <ExplainBenefit>
                                <View style={styles.benefitRow}>
                                    <Image
                                        source={grayCheck}
                                        style={styles.checkIcon}
                                        alt="gray check icon"
                                    />
                                    <Typo.b4 color={Palette.Gray70}>
                                        모든 편지지 제한 없이 사용
                                    </Typo.b4>
                                </View>
                                <View style={styles.benefitRow}>
                                    <Image
                                        source={grayCheck}
                                        style={styles.checkIcon}
                                        alt="gray check icon"
                                    />
                                    <Typo.b4 color={Palette.Gray70}>
                                        편지 내 사진 첨부 기능
                                    </Typo.b4>
                                </View>
                            </ExplainBenefit>
                        </View>
                    </Container>
                    <Button
                        color={Palette.Mandarin}
                        onPress={handleClick}
                        activeOpacity={0.7}
                    >
                        <Typo.b3 color={Palette.White}>
                            프로 버전으로 업그레이드 하기
                        </Typo.b3>
                    </Button>
                </View>
            </View>
            {alertState.isOpen && (
                <Alert text="해당 기능은 앱에서만 제공됩니다." />
            )}
        </Container>
    );
};

const Container = styled(View)`
    flex: 1;
    background: ${Palette.White};
`;
const Graybar = styled(View)`
    height: 47px;
    align-items: center;
    padding-left: 50px;
    flex-direction: row;
    justify-content: flex-start;
    background: ${Palette.Gray05};
`;
const ExplainBenefit = styled(View)`
    padding: 27px 31px;
    border-radius: 25px;
    background: ${Palette.Gray05};
`;
const Button = styled(StyledButton)`
    box-shadow: 1px 1px 10px 0px rgba(255, 165, 0, 0.7);
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
    },
    logoContainer: {
        alignItems: 'center',
    },
    benefitContainer: {
        width: 300,
        alignItems: 'center',
    },
    benefitInfo: {
        marginBottom: 30,
        alignItems: 'center',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 14,
    },
    benefitRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
    },
    checkIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
});

export default Pro;
