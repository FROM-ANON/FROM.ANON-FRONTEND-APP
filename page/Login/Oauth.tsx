import { loginAndGetTokensApi } from "network/apis/loginApis";
import { useEffect } from "react";
export const Oauth = () => {
    // Retrieve the authorization code from the URL
    const code: string | null = new URL(window.location.href).searchParams.get("code");

    // Send the authorization code to the backend and obtain JWT tokens
    useEffect(() => {
        if (code !== null) {
            loginAndGetTokensApi(code);
        }
    }, []);

    return <></>;
};
