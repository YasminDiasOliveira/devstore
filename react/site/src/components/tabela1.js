import styled from "styled-components";

const Tabela1 = styled.tr`
.linha-alternada {
  background-color: #ffffff;
}

.linha-alternada2 {
  background-color: #f5f5f5;
}

.coluna-acao img {
  width: 20px;
  heiht: 25px;
}

.coluna-acao > button {
  visibility: hidden;
}

tr:hover {
  .coluna-acao > button {
    visibility: visible;
  }
}

button {
  border: none;
  border-radius: 50px;
  background-color: #565656;
  padding: 5px 6px;
}

`;

export { Tabela1 };