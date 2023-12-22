import { ChangeEvent, FC } from 'react';

import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { ProfileImage } from 'components/Community/ProfileImage/ProfileImage';
import { loginUserState } from 'store/user';
import theme from 'styles/theme';

const { palette, textStyle } = theme;

type Props = {
  inputValue: string;
  onChangeComment: (e: ChangeEvent<HTMLInputElement>) => void;
  submitCommentData: () => void;
};

const CommentSubmit: FC<Props> = ({ inputValue, onChangeComment, submitCommentData }) => {
  const [loginUser] = useRecoilState(loginUserState);

  console.log(loginUser);

  return (
    <CommentInputContainer>
      <ProfileImage profileImage={loginUser.profileImage} />
      <CommentInput
        placeholder='댓글을 남겨보세요!'
        value={inputValue}
        onChange={onChangeComment}
      />
      <SubmitButton type='button' onClick={submitCommentData}>
        등록
      </SubmitButton>
    </CommentInputContainer>
  );
};

export default CommentSubmit;

const CommentInputContainer = styled.form`
  display: flex;
  padding-bottom: 27px;
  border-bottom: 1px solid ${palette.black100};
`;

const CommentInput = styled.input`
  margin-left: 8px;
  padding: 0px 8px;
  flex: 1 0 auto;
  &::placeholder {
    ${textStyle.title02}
    color: ${palette.black200};
  }
`;

const SubmitButton = styled.button`
  ${textStyle.body01}
  color: ${palette.black300};
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${palette.background.primary};
  cursor: pointer;
`;
