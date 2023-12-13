// TermOfPrivacyPolicy.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermOfPrivacyPolicy = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Header type={"sub"} />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>개인 정보 처리 방침</Text>
                    <View style={styles.hr} />
                    <Text style={styles.subtitle}>제 1장 총칙</Text>
                    <Text style={styles.paragraph}>
                        FROM.ANON(이하 회사)는 정보주체의 자유와 권리 보호를 위해
                        「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여,
                        적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
                        이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보
                        처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을
                        신속하게 처리할 수 있도록 하기 위하여 다음과 같이
                        개인정보 처리방침을 수립·공개합니다.
                    </Text>
                    {/* 제 1조 (목적) */}
                    <Text style={styles.subtitle}>제 1조 (목적)</Text>
                    <Text style={styles.paragraph}>
                        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
                        있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
                        이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에
                        따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        1. 회원 가입 및 관리
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 2조 (처리 및 보유기간) */}
                    <Text style={styles.subtitle}>제 2조 (처리 및 보유기간)</Text>
                    <Text style={styles.paragraph}>
                        회사는 법령에 따른 개인정보 보유·이용기간 또는
                        정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보
                        보유·이용기간 내에서 개인정보를 처리· 보유합니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 3조 (처리하는 개인정보 항목) */}
                    <Text style={styles.subtitle}>제 3조 (처리하는 개인정보 항목)</Text>
                    <Text style={styles.paragraph}>
                        회사는 다음의 개인정보 항목을 처리하고 있습니다.
                        1. 회원 가입 및 관리
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 4조 (개인정보 처리의 위탁) */}
                    <Text style={styles.subtitle}>제 4조 (개인정보 처리의 위탁)</Text>
                    <Text style={styles.paragraph}>
                        회사는 원활한 개인정보 업무처리를 위하여 다음과 같이
                        개인정보 처리업무를 위탁하고 있습니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 5조 (개인정보의 국외 이전) */}
                    <Text style={styles.subtitle}>제 5조 (개인정보의 국외 이전)</Text>
                    <Text style={styles.paragraph}>
                        회사는 아래와 같이 국외에 개인 정보를 제공하고 있습니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 6조 (개인정보의 파기 절차 및 방법) */}
                    <Text style={styles.subtitle}>제 6조 (개인정보의 파기 절차 및 방법)</Text>
                    <Text style={styles.paragraph}>
                        회사는 개인정보 보유기간의 경과, 처리목적 달성 등
                        개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
                        파기합니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 7조 (정보주체와 법정대리인의 권리·의무 및 행사방법) */}
                    <Text style={styles.subtitle}>제 7조 (정보주체와 법정대리인의 권리·의무 및 행사방법)</Text>
                    <Text style={styles.paragraph}>
                        정보주체는 회사에 대해 언제든지 개인정보
                        열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 8조 (개인정보의 안전성 확보조치) */}
                    <Text style={styles.subtitle}>제 8조 (개인정보의 안전성 확보조치)</Text>
                    <Text style={styles.paragraph}>
                        회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
                        취하고 있습니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항) */}
                    <Text style={styles.subtitle}>제 9조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)</Text>
                    <Text style={styles.paragraph}>
                        회사 이용자에게 개별적인 맞춤서비스를 제공하기 위해
                        정보주체의 관심과 선호를 파악하고 이를 기반으로 최적화된
                        서비스를 제공하기 위해 '쿠키(cookie)'를 사용합니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 10조 (개인정보 보호책임자) */}
                    <Text style={styles.subtitle}>제 10조 (개인정보 보호책임자)</Text>
                    <Text style={styles.paragraph}>
                        회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                        개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제를
                        위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 11조 (개인정보 처리방침 변경) */}
                    <Text style={styles.subtitle}>제 11조 (개인정보 처리방침 변경)</Text>
                    <Text style={styles.paragraph}>
                        개인정보 처리방침은 법령 및 방침에 따라 변경될 수 있으며,
                        이에 따른 변경 내용은 회사 홈페이지를 통해 공지하며,
                        합리적인 기간 내에 이용자에게 고지할 것입니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                    {/* 제 12조 (개인정보의 안전성 확보조치) */}
                    <Text style={styles.subtitle}>제 12조 (개인정보의 안전성 확보조치)</Text>
                    <Text style={styles.paragraph}>
                        회사는 개인정보 보호법 제29조에 따라 개인정보
                        처리시스템 등의 안전성 확보에 필요한 기술적, 관리적
                        및 물리적 조치를 다하고 있습니다.
                        {/* ... 나머지 내용 ... */}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flexDirection: 'column',
    },
    contentContainer: {
        flexDirection: 'column',
        gap: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 10,
    },
    // 나머지 스타일 정의...
});

export default TermOfPrivacyPolicy;
