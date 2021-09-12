import styled from "styled-components";

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 50px;

  label {
    font-family: Roboto;
    font-size: 18px;
    color: #615858;
  }

  .text-input {
  }


 .text-input input {
    width: 209px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
    margin: 0px 60px 0px 0px;
  }

  .link-input input {
    width: 530px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
  }

  .area-input textarea {
    width: 540px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
  }

  .input1 {
    display: flex;
    flex-direction: row;
  }

  .input2 {
    display: flex;
    flex-direction: row;
  }

  .input3 {
    display: flex;
    flex-direction: row;
  }

  .input4 {
    display: flex;
    flex-direction: column;
    }

  .box {
  }
`;

export { Input };
