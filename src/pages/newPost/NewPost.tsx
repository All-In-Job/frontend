import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';

import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';

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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  console.log(editorToHtml);

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
          <S.MyBlock>
            <Editor
              wrapperClassName='wrapper-class'
              editorClassName='editor'
              toolbarClassName='toolbar-class'
              toolbar={{
                fontSize: {
                  options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                  className: undefined,
                  component: undefined,
                  dropdownClassName: undefined,
                },
                inline: {
                  className: 'dsa',
                  bold: { className: undefined },
                  italic: { className: undefined },
                  underline: { className: undefined },
                  strikethrough: { className: 'disable' },
                  monospace: { className: 'disable' },
                  superscript: { className: 'disable' },
                  subscript: { className: 'disable' },
                },
                blockType: { className: 'disable' },
                list: { className: 'disable' },
                colorPicker: { className: 'disable' },
                link: { className: 'disable' },
                emoji: { className: 'disable' },
                embedded: { className: 'disable' },
                image: { className: 'disable' },
                remove: { className: 'disable' },
                history: { className: 'disable' },
              }}
              localization={{ locale: 'ko' }}
              placeholder='내용을 작성해주세요.'
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
            />
          </S.MyBlock>
        </S.InputContainer>

        <S.BtnContainer>
          <S.CancelBtn type='button'>취소</S.CancelBtn>
          <S.SubmitBtn type='submit'>등록</S.SubmitBtn>
        </S.BtnContainer>
      </form>
    </S.Container>
  );
};
