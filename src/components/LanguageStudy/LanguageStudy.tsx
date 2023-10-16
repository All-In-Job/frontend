import * as S from './LanguageStudy.styles';

const LanguageStudy = () => {
  return (
    <S.LanguageStudyContainer>
      <S.LanguageStudyWrapper>
        <S.TextBox>
          <S.Tag>
            <span>접수예정</span>
            <span>접수중</span>
            <span>마감임박</span>
          </S.Tag>
          <S.Title>TOEIC (Reading, Listening)</S.Title>
          <S.Schedule>
            <S.ExamDate>시험일시 : {'2023.08.25 (일) 12:00'}</S.ExamDate>
            <S.Deadline>접수마감 : {'2023.06.25 (월) 10:00'}</S.Deadline>
          </S.Schedule>
        </S.TextBox>
        <S.Button>접수하기</S.Button>
      </S.LanguageStudyWrapper>
    </S.LanguageStudyContainer>
  );
};

export default LanguageStudy;
