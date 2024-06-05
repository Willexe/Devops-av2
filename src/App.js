import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
color: #f2f2f2;

`;

function App() {



  return (
    <>
      <Container>
        <Title>Adicione um usuário</Title>

      </Container>



      <GlobalStyle />
    </>
  );
}

export default App;
