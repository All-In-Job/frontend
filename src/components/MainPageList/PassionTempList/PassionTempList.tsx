import styled from '@emotion/styled';

// import * as S from './PassionTempList.styles';

const PassionTempListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 183px);
  grid-template-rows: repeat(3, 231px);
  width: fit-content;
  gap: 30px;
  padding: 100px 50px 0;
`;

const PassionTempListCard = styled.div`
  width: 183px;
  height: 231px;
  border-radius: 14px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000047;
  padding: 11px;
`;

const ShortcutImgWrapper = styled.div`
  width: 161px;
  height: 117px;
  background: #ffe7de;
  border-radius: 10px;
  margin-bottom: 6px;
`;

const PostingDate = styled.p`
  font: normal normal 600 14px/18px SUIT;
  letter-spacing: 0px;
  color: #aeaaa6;
  margin-bottom: 3px;
`;

const PostTitle = styled.p`
  font: normal normal 600 14px/19px SUIT;
  letter-spacing: 0px;
  color: #251e1c;
  margin-bottom: px;
`;

const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe7de 0% 0% no-repeat padding-box;
  border-radius: 13px;
  width: 100%;
  padding: 3px 0;
`;

const Field = styled.p`
  text-align: center;
  font: normal normal bold 14px/18px SUIT;
  letter-spacing: 0px;
  color: #fd6b36;
`;

function PassionTempList() {
  const cards = Array.from({ length: 15 });
  return (
    <PassionTempListContainer>
      {cards.map(() => (
        <PassionTempListCard>
          <ShortcutImgWrapper />
          <PostingDate>2021.01.01</PostingDate>
          <PostTitle>제목제목제목제목</PostTitle>
          <FieldWrapper>
            <Field> 분야 : ~~</Field>
          </FieldWrapper>
        </PassionTempListCard>
      ))}
    </PassionTempListContainer>
  );
}

export default PassionTempList;
