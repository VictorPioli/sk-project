import React from "react";
import Logo from '../../assets/LogoRed.png'
import { Inputs, Img, MainDiv, ContainerInputs } from "./styles";
function Login() {
    return (
       
        <MainDiv>
            <ContainerInputs>
            <Img src={Logo} alt="logo-sk" />
            <Inputs>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>
            </Inputs>
            <Inputs>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password"/>
            </Inputs>
            </ContainerInputs>
        </MainDiv>
        
    )
}

export default Login
