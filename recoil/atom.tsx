// atoms.tsx
import { atom } from 'recoil';

export const alertOpenState = atom({
    key: 'alertOpenState',
    default: {
        isOpen: false,
    },
});

export const WriteMailState = atom({
    key: 'writeMailState',
    default: {
        instaId: '',
        mailPaperId: 1,
        text: '',
    },
});

export const deleteMailState = atom({
    key: 'deleteMailState',
    default: {
        mailId: 0,
        isConfirmedToDelete: false,
    },
});

export const mailPaperState = atom({
    key: 'mailPaperState',
    default: {
        mailPaperList: [],
        favoriteMailPaperList: [],
    },
});
