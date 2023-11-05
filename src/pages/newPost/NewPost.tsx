import * as S from './newPost.styles';

const options = ['공모전/대외활동', '자격증/어학', '인턴', '스터디', '취업선배 Q&A', '자유게시판'];
export const NewPost = () => {
  return (
    <S.Container>
      <S.Title>올인잡님의 생각을 나눠보세요!</S.Title>
      <form>
        <S.SelectContainer>
          <label htmlFor='select'>주제</label>
          <S.Select id='select'>
            {options.map(ele => (
              <option value={ele}>{ele}</option>
            ))}
          </S.Select>
        </S.SelectContainer>
        <div>
          <label></label>
          <input type='text' />
        </div>
        <div></div>
      </form>
    </S.Container>
  );
};
