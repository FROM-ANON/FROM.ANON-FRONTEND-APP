// MailPaper.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Column } from 'components/common/Div';
import { Header } from 'components/common/Header';
import { ToggleMenu } from 'components/common/ToggleMenu';
import { checkIsLogin, handleError } from 'functions';
import {
    getAllFavoriteMailPapersApi,
    getAllMailPapersApi,
} from 'network/apis/mailPaperApis';
import { useRecoilState } from 'recoil';
import { mailPaperState } from 'recoil/atom';
import { MailpapersList } from 'components/Mailpaper/MailpapersList';

const Mailpaper = () => {
    const [mailPaper, setMailPaper] = useRecoilState(mailPaperState);
    const [toggleMenu, setToggleMenu] = useState(0);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        checkIsLogin().then((res) => setIsLogin(res));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resAll = await getAllMailPapersApi();
                let isErr = false;
                let resFavorite;

                try {
                    resFavorite = await getAllFavoriteMailPapersApi();
                } catch (err) {
                    const status = handleError(err);
                    if (status === 400) isErr = true;
                }

                if (!isErr) {
                    setMailPaper({
                        ...mailPaper,
                        mailPaperList: resAll?.data,
                        favoriteMailPaperList: resFavorite?.data,
                    });
                } else {
                    setMailPaper({
                        ...mailPaper,
                        mailPaperList: resAll?.data,
                    });
                }
            } catch (err) {
                handleError(err);
            }
        };
        fetchData();
    }, []);

    return (
        <View>
            <Header type="sub-sub" text="편지지" />
            {isLogin && (
                <ToggleMenu
                    menu1={'전체'}
                    menu2={'즐겨찾기'}
                    menu1Len={mailPaper.mailPaperList.length}
                    menu2Len={mailPaper.favoriteMailPaperList.length}
                    setToggleMenu={setToggleMenu}
                />
            )}
            <MailpapersList
                key={mailPaper.mailPaperList.length}
                toggleMenu={toggleMenu}
            />
        </View>
    );
};

export default Mailpaper;
