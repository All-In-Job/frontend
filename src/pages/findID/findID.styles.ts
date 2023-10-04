import styled from '@emotion/styled';

type AuthNumberInputProps = {
  isAuthRequested: boolean;
};

type PhoneAuthSendBtnProps = {
  isActive: boolean;
};

export const FindIDContainer = styled.div`
  padding: 181px 0;
  background-color: #fd805d;
`;

export const FindIDWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: white;
  max-width: 494px;
  box-shadow: 0px 17px 33px #e34a13;
  border-radius: 60px;
  padding: 40px;
  gap: 34px;
`;

// export const AdvertiseBox = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: center;
//   background-color: #fddac9;
//   width: 540px;
//   height: 568px;
//   border-radius: 30px;
// `;

export const FindIDBox = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// export const CharactorBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 121px;
//   height: 55px;
//   background-color: lightgray;
//   font-weight: bold;
// `;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: #fd6b36;
  font-size: 39px;
  font-weight: bold;
  cursor: pointer;
`;

export const FindIDTitle = styled.div`
  border-radius: 29px;
  color: #121110;
  margin: auto;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 28px;
`;

export const nameBoxWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const nameTitle = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: left;
`;

export const nameInput = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 12px;
  border: 1px solid var(--black-200, #a0a09f);
  &:focus {
    border: 1px solid #fd6b36;
  }
`;

export const validateInfo = styled.p`
  display: inline-block;
  /* width: 100%; */
  white-space: nowrap;
  font-size: 14px;
  font-weight: bold;
  color: #fd6b36;
  padding: 8px 0 0 0;
`;

export const AuthWBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

export const phoneAuthTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const phoneAuthBox = styled.div`
  width: 100%;
  gap: 8px;
  margin-bottom: 10px;
`;

export const AuthNumberInput = styled.input<AuthNumberInputProps>`
  width: 100%;
  border-radius: 4px;
  padding: 12px;
  background-color: ${props => (props.isAuthRequested ? '#FFE8DF' : '#ededed')};
`;

export const phoneAuthInput = styled.input`
  width: 324px;
  height: 35px;
  background-color: #f0f0f0;
  border-radius: 14px;
  padding: 8px 14px;
  border: 2px solid #f0f0f0;

  &:focus {
    border: 2px solid #fd6b36;
  }
`;

export const phoneAuthSendBtn = styled.button<PhoneAuthSendBtnProps>`
  background-color: ${props => (props.isActive ? '#FFE8DF' : '#E7E6E5')};
  color: ${props => (props.isActive ? '#FD6B36' : '#a0a09f')};
  border-radius: 4px;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  padding: 12px;
  white-space: nowrap;
`;

export const timeCount = styled.p`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #fd6b36;
  margin: 8px 0 32px 4px;
`;

export const confirmBtn = styled.button`
  width: 100%;
  height: 51px;
  background-color: #e7e6e5;
  color: white;
  border-radius: 14px;
  cursor: pointer;
`;
