import { AxiosResponse } from "axios";
import { Buttons } from "components/InboxMail/Buttons";
import { Mail } from "components/InboxMail/Mail";
import { PageContainer, Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { checkIsLogin, handleError, handleUnauthorizedAccess } from "functions";
import { getMailApi } from "network/apis/mailApis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mailType } from "types";

export const InboxMail = () => {
    // useEffect to check login status and handle unauthorized access
    useEffect(() => {
        checkIsLogin().then((res) => !res && handleUnauthorizedAccess());
    }, []);

    // Extracting the 'id' parameter from the URL
    const { id } = useParams();
    const idInt = id ? parseInt(id) : null;

    // State to store the details of the mail
    const [mail, setMail] = useState<mailType | undefined>();

    // useEffect to fetch mail details when the component mounts or 'id' changes
    useEffect(() => {
        const getMail = async () => {
            if (idInt !== null) {
                try {
                    let res: AxiosResponse<any> = await getMailApi(idInt);
                    setMail(res?.data);
                } catch (err) {
                    handleError(err);
                }
            }
        };

        getMail();
    }, [idInt]);

    return (
        <>
            {/* Render mail details if available */}
            {mail && (
                <Container mailPaperId={mail.mailPaperId} gap={46}>
                    {/* Subheader component with a background color */}
                    <Header type="sub" bgcolor="rgba(255, 255, 255, 0.30)" />

                    {/* Column container for mail and buttons with specific alignment and gap */}
                    <Column alignItems="center" gap={105}>
                        {/* Mail component to display mail content */}
                        <Mail mail={mail} />

                        {/* Buttons component for additional actions */}
                        <Buttons mail={mail} />
                    </Column>
                </Container>
            )}
        </>
    );
};
