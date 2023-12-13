// MailpapersList.tsx
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { Palette } from 'styles/Palette';
import favoriteNo from 'assets/icons/favorite-no.svg';
import favoriteYes from 'assets/icons/favorite-yes.svg';
import crown from 'assets/icons/crown.svg';
import { checkIsLogin } from 'functions';
import {
  delFavoriteMailPaperApi,
  getAllFavoriteMailPapersApi,
  postFavoriteMailPaperApi,
} from 'network/apis/mailPaperApis';
import { useRecoilState } from 'recoil';
import { WriteMailState, mailPaperState } from 'recoil/atom';
import { mailpaperType } from 'types';
import { useNavigation } from '@react-navigation/native';

export const MailpapersList = ({ toggleMenu }: { toggleMenu: number }) => {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    checkIsLogin().then((res) => setIsLogin(res));
  }, []);

  const [mailPaper, setMailPaper] = useRecoilState(mailPaperState);
  const [toggledMPList, setToggledMPList] = useState<Array<mailpaperType>>([]);

  const fetchAllFavoriteMailPapers = async () => {
    let res = await getAllFavoriteMailPapersApi();
    setMailPaper({ ...mailPaper, favoriteMailPaperList: res?.data });
  };

  const mailpaperSet = [];
  for (let i = 0; i < toggledMPList?.length; i += 2) {
    const set = toggledMPList.slice(i, i + 2);
    mailpaperSet.push(set);
  }

  const handleClickFavorite = async (mailPaperId: number) => {
    const favoriteMailPaperId = mailPaper.favoriteMailPaperList.find(
      (fmp) => fmp.mailPaperId === mailPaperId
    )?.id;

    if (favoriteMailPaperId) {
      await delFavoriteMailPaperApi(favoriteMailPaperId);
    } else {
      await postFavoriteMailPaperApi(mailPaperId);
    }
    fetchAllFavoriteMailPapers();
  };

  const checkIsFavorite = (mailPaperId: number): boolean => {
    return mailPaper.favoriteMailPaperList.some(
      (fmp) => fmp.mailPaperId === mailPaperId
    );
  };

  useEffect(() => {
    if (toggleMenu === 0) {
      setToggledMPList(mailPaper.mailPaperList);
    } else {
      setToggledMPList(
        mailPaper.mailPaperList.filter((it) => checkIsFavorite(it.id))
      );
    }
  }, [toggleMenu]);

  const setItSelectedMailPaper = (mailPaperId: number) => {
    navigation.navigate(-1);
  };

  return (
    <Container>
      {mailpaperSet.map((set, setIdx) => (
        <RowContainer key={setIdx}>
          {set.map((item, index) => (
            <Mailpaper
              key={index}
              mailPaperId={item.id}
              onPress={() => setItSelectedMailPaper(item.id)}
            >
              {item.pro ? (
                <Image source={crown} style={{ width: 11, height: 10 }} />
              ) : (
                <View />
              )}
              {isLogin && (
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    handleClickFavorite(item.id);
                  }}
                >
                  <Image
                    source={
                      checkIsFavorite(item.id) ? favoriteYes : favoriteNo
                    }
                    style={{ width: 13, height: 22 }}
                  />
                </TouchableOpacity>
              )}
            </Mailpaper>
          ))}
        </RowContainer>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 17px 0;
`;

const Mailpaper = styled.TouchableOpacity<{ mailPaperId: number }>`
  width: 145px;
  height: 300px;
  justify-content: space-between;
  padding: 16px;
  background: ${Palette.Gray10};
  border-radius: 25px;
  background-image: ${(props) =>
    `url("/mailPaper/${props.mailPaperId}.svg")`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const RowContainer = styled.View`
  max-width: 314px;
  justify-content: flex-start;
  gap: 24px;
`;
