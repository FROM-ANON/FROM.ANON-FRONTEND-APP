// Terms.tsx
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signupApi } from 'network/apis/loginApis';

import { StyledButton } from 'components/common/Button';
import { Column, Row } from 'components/common/Div';
import { Img } from 'components/common/Img';
import { StyledLink } from 'components/common/Link';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';

import termsAllCheckNo from 'assets/icons/terms-all-check-no.svg';
import termsAllCheckYes from 'assets/icons/terms-all-check-yes.svg';
import termCheckNo from 'assets/icons/term-check-no.svg';
import termCheckYes from 'assets/icons/term-check-yes.svg';
import termMore from 'assets/icons/term-more.svg';

const Terms = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState([
        {
            state: false,
            termTitle: '[필수] 개인정보 처리방침 동의',
            to: 'PrivacyPolicyScreen', // React Navigation에서 정의한 스크린 이름으로 변경
        },
        {
            state: false,
            termTitle: '[필수] 이용약관 동의',
            to: 'UsePolicyScreen', // React Navigation에서 정의한 스크린 이름으로 변경
        },
    ]);

    const navigation = useNavigation();

    const handleCheckboxChange = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index].state = !newCheckboxStates[index].state;
        setCheckboxStates(newCheckboxStates);
    };

    const toggleCheck = () => {
        if (allChecked) {
            setAllChecked(false);
            const newCheckboxStates = [
                { state: false, termTitle: checkboxStates[0].termTitle, to: checkboxStates[0].to },
                { state: false, termTitle: checkboxStates[1].termTitle, to: checkboxStates[1].to },
            ];
            setCheckboxStates(newCheckboxStates);
        } else {
            setAllChecked(true);
            const newCheckboxStates = [
                { state: true, termTitle: checkboxStates[0].termTitle, to: checkboxStates[0].to },
                { state: true, termTitle: checkboxStates[1].termTitle, to: checkboxStates[1].to },
            ];
            setCheckboxStates(newCheckboxStates);
        }
    };

    useEffect(() => {
        const checkIfAnyFalse = () => {
            for (const checkbox of checkboxStates) {
                if (!checkbox.state) {
                    return false;
                }
            }
            return true;
        };

        if (checkIfAnyFalse()) {
            setAllChecked(true);
        } else {
            setAllChecked(false);
        }
    }, [checkboxStates]);

    const handleClickBtn = async () => {
        if (allChecked) {
            let signupSuccess = false;
            try {
                await signupApi();
                signupSuccess = true;
            } catch {}

            if (signupSuccess) {
                navigation.navigate('MainScreen'); // React Navigation에서 정의한 메인 스크린 이름으로 변경
            }
        }
    };

    return (
        <View style={styles.wrapper}>
            <Column style={styles.container}>
                <Column>
                    <Typo.h3>
                        약관에 동의하면 {"\n"} 회원가입이 완료됩니다.
                    </Typo.h3>
                </Column>
                <View style={styles.termContainer}>
                    <Row style={styles.row} alignItems="center" gap={8}>
                        <TouchableOpacity onPress={toggleCheck}>
                            <Image
                                source={allChecked ? termsAllCheckYes : termsAllCheckNo}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <Typo.b4 color={Palette.Gray60}>
                            [필수] FROM.ANON 약관 전체 동의
                        </Typo.b4>
                    </Row>
                    <View style={styles.line} />
                    <Column style={styles.column}>
                        <Row style={styles.row} alignItems="center" justifyContent="space-between">
                            <Row style={styles.row} alignItems="center" gap={8}>
                                <TouchableOpacity onPress={() => handleCheckboxChange(0)}>
                                    <Image
                                        source={checkboxStates[0].state ? termCheckYes : termCheckNo}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                                <Typo.b4 color={Palette.Gray60}>
                                    {checkboxStates[0].termTitle}
                                </Typo.b4>
                            </Row>
                            <StyledLink to={checkboxStates[0].to}>
                                <Image source={termMore} style={styles.moreIcon} />
                            </StyledLink>
                        </Row>
                        <Row style={styles.row} alignItems="center" justifyContent="space-between">
                            <Row style={styles.row} alignItems="center" gap={8}>
                                <TouchableOpacity onPress={() => handleCheckboxChange(1)}>
                                    <Image
                                        source={checkboxStates[1].state ? termCheckYes : termCheckNo}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>
                                <Typo.b4 color={Palette.Gray60}>
                                    {checkboxStates[1].termTitle}
                                </Typo.b4>
                            </Row>
                            <StyledLink to={checkboxStates[1].to}>
                                <Image source={termMore} style={styles.moreIcon} />
                            </StyledLink>
                        </Row>
                    </Column>
                </View>
            </Column>
            <StyledButton
                color={allChecked ? Palette.Mandarin : Palette.Gray05}
                onPress={handleClickBtn}
            >
                <Typo.b3 color={allChecked ? Palette.White : Palette.Gray50}>
                    확인
                </Typo.b3>
            </StyledButton>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 116,
    },
    container: {
        maxWidth: 300,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    termContainer: {
        width: 300,
        paddingVertical: 31,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Palette.Mandarin,
    },
    line: {
        width: '100%',
        height: 1,
        marginVertical: 26,
        backgroundColor: Palette.Mandarin,
    },
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 24.14,
        height: 24.14,
    },
    column: {
        marginTop: 15,
    },
    moreIcon: {
        width: 5.92,
        height: 11.37,
    },
});

export default Terms;
