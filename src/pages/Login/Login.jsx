import React from "react";
import Logo from '../../assets/Logo.png'
import { ContainerInputs, Img, MainDiv } from "./styles";
function Login() {
    return (
        <>
        <MainDiv>
            <Img src={Logo} alt="logo-sk" />
            <ContainerInputs>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>
            </ContainerInputs>
            <ContainerInputs>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password"/>
            </ContainerInputs>
        </MainDiv>
        </>
    )
}

export default Login
