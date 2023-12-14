import { ChangeEvent, useEffect, useState } from 'react';

import * as S from './CertificatePageSearch.styles';
import { ReactComponent as ExpandCircle } from './res/expand_circle_right.svg';
import { ReactComponent as ExpandMore } from './res/expand_more.svg';

type searchProps = {
  keyword: string | undefined;
  searchedCertificates: string[];
  certificate: string | undefined;
  setCertificate: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const CertificatePageSearch = ({
  keyword,
  searchedCertificates,
  certificate,
  setCertificate,
}: searchProps) => {
  // const [certificate, setCertificate] = useState<string>();
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);

  const removeDuplicates = (titles: string[]): string[] => [...new Set(titles)];
  const onChangeInputTitleValue = (e: ChangeEvent<HTMLInputElement>) =>
    setCertificate(e.target.value);
  const onSelectTitle = (title: string) => setCertificate(title);
  const onFocusInput = () => keyword && setIsVisibleTitle(true);
  const onBlurInput = () => setIsVisibleTitle(false);

  useEffect(() => {}, []);

  console.log(searchedCertificates);

  return (
    <S.Container>
      <S.Heading>{'검색 결과'}</S.Heading>
      <S.Wrapper>
        <S.InputBox>
          <S.Input
            type='text'
            value={keyword ? `#${keyword}` : '키워드를 선택해주세요.'}
            readOnly
            disabled
          />
          <ExpandCircle />
        </S.InputBox>
        <S.SelectBox show={isVisibleTitle}>
          <label>
            <S.Input
              type='text'
              placeholder='자격증을 선택해주세요.'
              value={certificate}
              onChange={onChangeInputTitleValue}
              onFocus={onFocusInput}
              onBlur={onBlurInput}
              readOnly
            />
            <ExpandMore />
          </label>
          {isVisibleTitle && (
            <S.DropdownContainer>
              <S.SelectOptions>
                {removeDuplicates(searchedCertificates).map(title => (
                  <S.Option key={title} onMouseDown={() => onSelectTitle(title)}>
                    {title}
                  </S.Option>
                ))}
              </S.SelectOptions>
            </S.DropdownContainer>
          )}
        </S.SelectBox>
      </S.Wrapper>
    </S.Container>
  );
};
