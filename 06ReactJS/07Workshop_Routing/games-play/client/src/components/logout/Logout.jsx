import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import Path from "../../paths";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler, isUserLogged } = useContext(AuthContext);

    useEffect(() => {

        if (isUserLogged) {
            authService.logout()
            // .then(() => {
            //     logoutHandler();
            //     navigate(Path.Home);
            // })
            // .catch(() => {
            //     logoutHandler();
            //     navigate(Path.Home);
            // });
        }
        logoutHandler();
        navigate(Path.Home);

    }, []);

    return null;
};