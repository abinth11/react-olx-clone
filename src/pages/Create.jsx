import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Create from "../components/Create/Create";
import { AuthContext } from "../store/Context";
import LoginPages from "./Login";
const CreatePage = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {
                user ? <>
                    <Header />
                    <Create />
                </> : <LoginPages />
            }
        </>
    )
}

export default CreatePage;