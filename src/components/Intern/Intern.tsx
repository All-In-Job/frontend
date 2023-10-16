import * as S from './Intern.styles';

interface IGetData {
  data: InterProps[];
}

interface InterProps {
  company: string;
  title: string;
  mainImage: string;
  view: number;
  scrap: number;
  Dday: string;
  location: string;
}

const TableTitle = ['기업명', '공고명', '지역', '마감일', '조회수', '스크랩'];

const Intern = (data: IGetData) => {
  return (
    <S.InternContainer>
      <S.TableTitle>
        {TableTitle.map(el => {
          return <S.Heading>{el}</S.Heading>;
        })}
      </S.TableTitle>
      {data.data.map(el => {
        return (
          <S.InternWrapper>
            <S.CompanyBox>
              <S.Img src={el.mainImage}></S.Img>
              {'주식회사 컴퍼니'}
            </S.CompanyBox>
            <S.TextBox>
              <S.Title>{el.title}</S.Title>
              {'마케팅 전략/기획'}
            </S.TextBox>
            <S.Location>{el.location}</S.Location>
            <S.date>{el.Dday}</S.date>
            <S.View>{el.view}</S.View>
            <S.Scrap>{el.scrap}</S.Scrap>
          </S.InternWrapper>
        );
      })}
    </S.InternContainer>
  );
};

export default Intern;
