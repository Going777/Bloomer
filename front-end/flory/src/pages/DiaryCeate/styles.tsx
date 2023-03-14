import styled from "styled-components";

export const SMain = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 기록완료 버튼 wrapper */
  .bottom__wrapper {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-2rem);
  }
`;

export const SSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  margin-top: 1rem;
  height: 80%;
  width: 90%;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  .input__wrapper {
    /* width: 90%; */
    /* margin: auto; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0.8rem 0;
    margin-bottom: 0;
    /* margin-left: 5%; */
  }

  .image__button {
    background-color: #f2f2fc;
    border-radius: 16px;
    padding: 0.6rem;
  }

  .image-input__icon {
    font-size: 1.5rem;
  }

  .file__input {
    display: none;
  }

  .MuiFormGroup-root {
    justify-content: center;
  }

  .MuiFormControlLabel-labelPlacementEnd {
    flex-direction: row-reverse;
  }

  .MuiFormControlLabel-label {
    color: #666161;
  }

  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked {
    color: #3f3371;
  }

  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
    + .MuiSwitch-track {
    background-color: #f2f2fc;
  }

  .css-j204z7-MuiFormControlLabel-root {
    margin-right: 0;
  }

  /* 위치 */
  .location__wrapper {
    margin: 0 auto;
    margin-top: 0.8rem;
    width: 90%;
    & > div {
      text-align: left;
    }

    & > button {
      float: right;
      background-color: #dec5fd;
      color: #ffffff;
      font-size: 0.8rem;
      border-radius: 12px;
      padding: 0.2rem 0.5rem;
    }
  }

  .location {
    text-align: left;
    font-size: 0.8rem;
    background-color: #f2f2fc;
    border-radius: 8px;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
`;
