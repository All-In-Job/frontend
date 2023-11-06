// import { useState } from 'react';

import { DropDownSelect } from 'components/commons/DropDownSelect/DropDownSelect';

import 'react-quill/dist/quill.snow.css';
import * as S from './newPost.styles';

const options = [
  { value: '자격증/어학', label: '공모전/대외활동' },
  { value: '인턴', label: '인턴' },
  { value: '스터디', label: '스터디' },
  { value: '취업선배 Q&A', label: '취업선배 Q&A' },
  { value: '자유게시판', label: '자유게시판' },
];

export const NewPost = () => {
  // const [value, setValue] = useState('');

  return (
    <S.Container>
      <S.Title>올인잡님의 생각을 나눠보세요!</S.Title>
      <form>
        <S.InputContainer>
          <S.SelectWrapper>
            <label>주제</label>
            <DropDownSelect options={options} placeholder='주제를 선택해주세요!' />
          </S.SelectWrapper>
          <S.InputWrapper>
            <label>제목</label>
            <S.Input type='text' placeholder='제목을 입력해주세요!' />
          </S.InputWrapper>
        </S.InputContainer>
      </form>
    </S.Container>
  );
};
