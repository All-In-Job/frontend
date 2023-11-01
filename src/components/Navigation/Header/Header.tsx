import { useState } from 'react';

import { Link } from 'react-router-dom';

import * as S from './header.styles.ts';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    {
      name: '공모전',
      path: 'competition',
      subItems: [
        { subName: '공모분야', subPath: 'competition_field' },
        { subName: '시상규모', subPath: 'award_scale' },
        { subName: '수상혜택', subPath: 'award_benefits' },
        { subName: '지원대상', subPath: 'support_target' },
      ],
    },
    {
      name: '대외활동',
      path: 'outside',
      subItems: [
        { subName: '활동분야', subPath: 'activity_field' },
        { subName: '관심분야', subPath: 'area_of_interest' },
        { subName: '활동혜택', subPath: 'activity_benefits' },
        { subName: '활동기간', subPath: 'activity_duration' },
        { subName: '지역', subPath: 'location' },
      ],
    },
    {
      name: '자격증',
      path: 'qnet',
      subItems: [
        { subName: '국가기술자격증', subPath: 'technical' },
        { subName: '국가전문자격증', subPath: 'professional' },
      ],
    },
    {
      name: '어학',
      path: 'language',
      subItems: [
        { subName: '영어', subPath: 'english' },
        { subName: '중국어', subPath: 'chinese' },
        { subName: '스페인어', subPath: 'spanish' },
        { subName: '기타', subPath: 'other' },
      ],
    },
    {
      name: '인턴',
      path: 'intern',
      subItems: [
        { subName: '대기업', subPath: 'large_corporation' },
        { subName: '중소기업', subPath: 'sme' },
        { subName: '스타트업', subPath: 'startup' },
      ],
    },
    {
      name: '취준job담',
      path: 'community',
      subItems: [
        { subName: '취업선배 Q&A', subPath: 'job_senior_qa' },
        { subName: '공모전/대외활동', subPath: 'competitions_external_activities' },
        { subName: '자격증/어학', subPath: 'certifications_language_proficiency' },
        { subName: '인턴', subPath: 'intern' },
        { subName: '스터디', subPath: 'study' },
        { subName: '자유게시판', subPath: 'general_discussion_board' },
      ],
    },
  ];
  return (
    <>
      <S.HeaderContainer>
        <S.MenuContainer>
          <S.HeaderLogo>ALL IN JOB</S.HeaderLogo>
          <div
            style={{
              flex: 2,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <S.MenuWrapper>
              {menuItems.map(item => (
                <S.MenuItem key={item.name}>
                  <Link to={`${item.path}/${item.subItems[0].subPath}`}>{item.name}</Link>
                </S.MenuItem>
              ))}
              {isHovered ? (
                <S.HoverMenu>
                  <S.divisionLine />
                  <S.MenuDetailWrapper>
                    {menuItems.map(item => (
                      <div
                        key={item.name}
                        style={{
                          width: '125px',
                        }}
                      >
                        <S.DetailItems>
                          {item.subItems.map(subItem => (
                            <p
                              style={{
                                width: '125px',
                                cursor: 'pointer',
                              }}
                              key={subItem.subName}
                            >
                              <Link to={`${item.path}/${subItem.subPath}`}>{subItem.subName}</Link>
                            </p>
                          ))}
                        </S.DetailItems>
                      </div>
                    ))}
                  </S.MenuDetailWrapper>
                </S.HoverMenu>
              ) : null}
            </S.MenuWrapper>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
            <S.CharactorBox>캐릭터</S.CharactorBox>
          </div>
        </S.MenuContainer>
      </S.HeaderContainer>
      {isHovered && <S.Overlay />}
    </>
  );
}

export default Header;
