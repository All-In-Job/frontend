import * as S from './myInfoNav.styles';

function MyInfoNav() {
  const myInfoNavList = [
    {
      img: '',
      title: '내정보',
    },
    {
      img: '',
      title: '열정온도',
    },
    {
      img: '',
      title: '스크랩',
    },
    {
      img: '',
      title: '달력',
    },
  ];
  return (
    <S.InfoNavContainer>
      <S.InfoNavWrapper>
        {myInfoNavList.map((item, index) => (
          <S.InfoNavListItem key={index}>
            <S.InfoNavImg src={item.img} alt={item.title} />
            <S.InfoNavTitle>{item.title}</S.InfoNavTitle>
          </S.InfoNavListItem>
        ))}
      </S.InfoNavWrapper>
    </S.InfoNavContainer>
  );
}

export default MyInfoNav;
