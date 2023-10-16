import {
  ChangeEventHandler,
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ReactComponent as ArrowForwardIcon } from 'assets/icons/icon_arrow_forward.svg';
import { ReactComponent as CheckCircleIcon } from 'assets/icons/icon_check_circle.svg';

import theme from 'styles/theme';

import {
  BasicInformationContext,
  INPUT_RULES,
  type InputFieldType,
  type InputRuleType,
} from './BasicInformation';
import * as S from './BasicInformation.style';
import { ErrorMessage } from './BasicInformation.style';

type InputProps = {
  rule: InputRuleType;
  validateInput: (value: string, name: InputFieldType, rule: InputRuleType) => void;
};

export const InputGroup = () => {
  const { name, nickname, phone } = INPUT_RULES;
  const { currentFormState, setCurrentFormState } = useContext(BasicInformationContext)!;
  const [isCodeConfirmed, setIsCodeConfirmed] = useState(false);

  const validateInput = (value: string, name: InputFieldType, rule: InputRuleType) => {
    setCurrentFormState({
      ...currentFormState,
      [name]: { value, isValid: rule.regex.test(value) },
    });
  };

  const isAllFormFieldsTrue = ((textFields: InputFieldType[]) => {
    const resultSet: Set<string | boolean> = new Set([]);
    resultSet.add(textFields.every(field => currentFormState[field].isValid)); // true
    resultSet.add(currentFormState.agreement.isAllChecked);
    resultSet.add(isCodeConfirmed);

    return resultSet.size === 1 && resultSet.has(true);
  })(['name', 'nickname', 'phone']);

  return (
    <S.Container>
      <NameInput rule={name} validateInput={validateInput} />
      <NicknameInput rule={nickname} validateInput={validateInput} />
      <PhoneInput
        rule={phone}
        validateInput={validateInput}
        setIsCodeConfirmed={setIsCodeConfirmed}
      />
      <Agreement />
      <S.Submit disabled={!isCodeConfirmed} $isValid={isAllFormFieldsTrue}>
        확인
      </S.Submit>
    </S.Container>
  );
};

const NameInput: FC<InputProps> = ({ rule, validateInput }) => {
  const { currentFormState } = useContext(BasicInformationContext)!;
  const { isValid, value } = currentFormState.name;

  return (
    <S.Row>
      <S.InputHeading>이름</S.InputHeading>
      <S.Input
        type='text'
        name='name'
        placeholder='이름을 입력하세요'
        onChange={e => validateInput(e.target.value, 'name', rule)}
      />
      {value && !isValid && <ErrorMessage>{INPUT_RULES.name.errorMsg}</ErrorMessage>}
    </S.Row>
  );
};

const PhoneInput: FC<InputProps & { setIsCodeConfirmed: Dispatch<SetStateAction<boolean>> }> = ({
  rule,
  validateInput,
  setIsCodeConfirmed,
}) => {
  const { currentFormState } = useContext(BasicInformationContext)!;
  const { isValid, value } = currentFormState.phone;
  const [isCodeRequested, setIsCodeRequested] = useState(false);
  const [code, setCode] = useState('');

  const requestPhoneVerification = () => {
    // 네트워크 요청 - 인증번호 요청
    setIsCodeRequested(true);
  };
  const requestCodeValidation: MouseEventHandler<HTMLButtonElement> = e => {
    // 네트워크 요청 - 인증번호 확인
    console.log(e.target);
    setIsCodeConfirmed(true);
  };

  return (
    <S.Row>
      <S.InputHeading>휴대폰 번호</S.InputHeading>
      <S.FlexRow style={{ gap: '8px' }}>
        <S.Input
          type='text'
          placeholder='휴대폰 11자리를 입력하세요'
          name='phone'
          onChange={e => validateInput(e.target.value, 'phone', rule)}
        />
        <S.Button disabled={!isValid} onClick={requestPhoneVerification} $isValid={isValid}>
          인증요청
        </S.Button>
      </S.FlexRow>
      <S.FlexRow style={{ marginTop: '12px', gap: '8px' }}>
        <S.Input
          type='text'
          placeholder={isCodeRequested ? '인증 번호를 입력하세요' : ''}
          name='code'
          disabled={!isCodeRequested}
          onChange={e => setCode(e.target.value)}
          style={{
            backgroundColor: isCodeRequested ? 'transparent' : theme.palette.background.primary,
          }}
        />
        <S.Button
          disabled={code === ''}
          $isValid={isCodeRequested && Boolean(code)}
          onClick={requestCodeValidation}
        >
          인증완료
        </S.Button>
      </S.FlexRow>
      {value && !isValid && <ErrorMessage>{INPUT_RULES.phone.errorMsg}</ErrorMessage>}
    </S.Row>
  );
};

const NicknameInput: FC<InputProps> = ({ rule, validateInput }) => {
  const { currentFormState } = useContext(BasicInformationContext)!;
  const { isValid, value } = currentFormState.nickname;
  return (
    <S.Row>
      <S.InputHeading>닉네임</S.InputHeading>
      <S.Input
        type='text'
        placeholder='닉네임을 입력하세요'
        name='nickname'
        onChange={e => validateInput(e.target.value, 'nickname', rule)}
      />
      {value && !isValid && <ErrorMessage>{INPUT_RULES.nickname.errorMsg}</ErrorMessage>}
    </S.Row>
  );
};

const Agreement = () => {
  const { currentFormState, setCurrentFormState } = useContext(BasicInformationContext)!;
  const { agreement: agreementState } = currentFormState;

  const inputStyle = {
    position: 'absolute',
    height: 0,
    width: 0,
    cursor: 'pointer',
  } as const;

  const updateAgreeAll: MouseEventHandler<HTMLButtonElement> = () => {
    const updateAgreeProperties = (value: boolean) => {
      for (const key in agreementState)
        key.startsWith('agree-') && (agreementState[key as keyof typeof agreementState] = value);
    };

    updateAgreeProperties(!isAllChecked);
    setCurrentFormState({
      ...currentFormState,
      agreement: { ...agreementState, isAllChecked: !isAllChecked },
    });
  };

  const isAllChecked = useMemo(() => {
    for (const key in agreementState)
      if (key.startsWith('agree-') && !agreementState[key as keyof typeof agreementState])
        return false;
    return true;
  }, [currentFormState.agreement]);

  const updateAgreementState: ChangeEventHandler<HTMLInputElement> = e => {
    const checkbox = e.currentTarget;
    setCurrentFormState({
      ...currentFormState,
      agreement: { ...agreementState, [checkbox.name]: checkbox.checked },
    });
  };

  useEffect(() => {
    setCurrentFormState({
      ...currentFormState,
      agreement: { ...agreementState, isAllChecked },
    });
  }, [isAllChecked]);

  return (
    <S.Row style={{ gap: '8px' }}>
      <S.InputHeading>약관동의</S.InputHeading>
      <p>필수항목 및 선택항목 약관에 동의해주세요.</p>
      <S.CheckAllButton type='button' onClick={updateAgreeAll}>
        <CheckCircleIcon fill={isAllChecked ? theme.palette.orange400 : theme.palette.black200} />
        <S.InputHeading>전체동의</S.InputHeading>
      </S.CheckAllButton>
      <S.Ul>
        <li>
          <S.Label>
            <CheckCircleIcon
              fill={agreementState['agree-1'] ? theme.palette.orange400 : theme.palette.black200}
            />
            <input
              name='agree-1'
              type='checkbox'
              style={inputStyle}
              checked={agreementState['agree-1']}
              onChange={updateAgreementState}
            />
            <S.Required>필수</S.Required>
            <span>개인정보 수집 및 이용동의</span>
            <ArrowForwardIcon />
          </S.Label>
        </li>
        <li>
          <S.Label>
            <CheckCircleIcon
              fill={agreementState['agree-2'] ? theme.palette.orange400 : theme.palette.black200}
            />
            <input
              name='agree-2'
              type='checkbox'
              style={inputStyle}
              checked={agreementState['agree-2']}
              onChange={updateAgreementState}
            />
            <S.Required>필수</S.Required>
            <span>정보보유기간</span>
            <ArrowForwardIcon />
          </S.Label>
        </li>
      </S.Ul>
    </S.Row>
  );
};
