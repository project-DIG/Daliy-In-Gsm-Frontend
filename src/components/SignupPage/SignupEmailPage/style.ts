import styled from '@emotion/styled';

export const SignupLayout = styled.div`
  width: 100%;
  height: 100%;
`;

export const SignupSection = styled.section`
  padding-top: 15%;
  width: 360px;
  height: 80%;
  margin: auto;
`;
export const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LetsStart = styled.div`
  font-family: 'Changa One';
  font-style: normal;
  font-weight: 400;
  font-size: 46px;
  line-height: 53px;
  color: #6c8ee5;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Input = styled.input<{ isError: boolean }>`
  width: 162px;
  height: 60px;
  border: ${e => (e.isError ? '2px solid #FF9090' : '2px solid #9fb6ee')};
  border-radius: 16px;
  font-size: 16px;
  text-align: center;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 500;
  &:focus {
    border-color: #375dbb;
    outline: #375dbb;
  }
  &::placeholder {
    text-align: center;
  }
`;

export const Check = styled.button`
  cursor: pointer;
  width: 170px;
  height: 64px;
  border-radius: 16px;
  background-color: #9fb6ee;
  outline: 2px Solid #7e9ce8;
  border: none;
  color: white;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  &:hover {
    background-color: white;
    color: #7e9ce8;
    transition: 0.3s;
    transform: translateY(-4px);
    box-shadow: 0 4px 0 #7e9ce8;
  }
  &:active {
    transition: 0s;
    transform: translateY(0);
    box-shadow: inset 0 2px 2px #7e9ce8;
  }
`;

export const AuthenticationBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SignBox = styled.div`
  position: absolute;
  bottom: 13.83%;
  right: 20%;
`;

export const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 700;
`;

export const EmailBox = styled.form`
  display: flex;
`;

export const EmailButton = styled.button`
  cursor: pointer;
  width: 170px;
  height: 64px;
  border-radius: 16px;
  background-color: #9fb6ee;
  outline: 2px Solid #7e9ce8;
  border: none;
  color: white;
  font-family: 'IBM Plex Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  margin-left: 20px;
  &:hover {
    background-color: white;
    color: #7e9ce8;
    transition: 0.3s;
    transform: translateY(-4px);
    box-shadow: 0 4px 0 #7e9ce8;
  }
  &:active {
    transition: 0s;
    transform: translateY(0);
    box-shadow: inset 0 2px 2px #7e9ce8;
  }
`;
