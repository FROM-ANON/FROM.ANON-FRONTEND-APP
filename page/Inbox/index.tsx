import { MailList } from "components/Inbox/MailList";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { useEffect, useState } from "react";
import { Toast } from "components/common/Toast";
import { Confirm } from "components/common/modal/Confirm";
import { useRecoilState } from "recoil";
import { alertOpenState, deleteMailState } from "recoil/atom";
import { checkIsLogin, handleUnauthorizedAccess } from "functions";

export const Inbox = () => {
    // useEffect to check login status and handle unauthorized access
    useEffect(() => {
        checkIsLogin().then((res) => !res && handleUnauthorizedAccess());
    }, []);

    // Recoil states for managing delete mail and alert state
    const [deleteState, setDeleteState] = useRecoilState(deleteMailState);
    const [alertState, setAlertState] = useRecoilState(alertOpenState);

    // State to trigger mail list refresh
    const [refreshKey, setRefreshKey] = useState(0);

    // State for displaying a toast message
    const [toast, setToast] = useState<boolean>(false);

    // State to confirm deletion
    const [isConfirmedToDelete, setIsConfirmedToDelete] =
        useState<boolean>(false);

    // useEffect to handle deletion confirmation and trigger mail list refresh
    useEffect(() => {
        if (isConfirmedToDelete) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000);

            setRefreshKey((prevKey) => prevKey + 1);
            setIsConfirmedToDelete(false);
        }
    }, [isConfirmedToDelete]);

    return (
        <Column>
            {/* Header component with the text "받은 편지함" */}
            <Header type="sub" text="받은 편지함" />

            {/* MailList component with a key for triggering refresh */}
            <MailList key={refreshKey} />

            {/* Confirmation dialog for deleting mail */}
            {alertState.isOpen && (
                <Confirm
                    text="편지를 삭제하시겠습니까?"
                    type="delete"
                    setIsModalOpenState={setAlertState}
                    setIsConfirmedToAction={setIsConfirmedToDelete}
                    mailId={deleteState.mailId}
                ></Confirm>
            )}

            {/* Toast component for showing deletion confirmation */}
            <Toast show={toast} text="삭제되었습니다." />
        </Column>
    );
};
