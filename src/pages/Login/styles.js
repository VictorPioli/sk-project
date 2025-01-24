import styled from "styled-components";

export const Img = styled.img`
    width: 200px; /* Ajuste conforme necessário */
    height: auto; /* Mantém a proporção */
    object-fit: contain; /* Garante que a imagem não seja cortada */
`;

export const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 2px solid red; 
    border-radius: 10px;
    box-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red; /* Efeito neon */
    width: 300px; 
    height: 400px; 
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const ContainerInputs = styled.div`
    width: 80%;
    padding: 10px;
    input {
    width: 100%;
    height: 20px;
    }
`
