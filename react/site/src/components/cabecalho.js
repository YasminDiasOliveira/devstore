import styled from "styled-components";

const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: #ffffff;
  width: 1005px;

  .usuario {
    display: flex;
    align-items: center;
    font-family: Roboto;
    color: #615858;
  }

  .usuario img {
    border-radius: 50%;
    width: 57px;
    height: 57px;
    margin: 0px 15px 0px 0px;
  }

  .botoes {
    display: flex;
    align-items: center;
  }

  button {
    border: none;
    margin: 0px 5px;
  }

  .fundo img {
    width: 30px;
    height: 24px;
  }

  .fundo {
    background-color: #119fdc;
    border-radius: 50px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { Cabecalho };
