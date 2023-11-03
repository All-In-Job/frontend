import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

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
        { subName: '일본어', subPath: 'japanese' },
        { subName: '중국어', subPath: 'chinese' },
      ],
    },
    {
      name: '인턴',
      path: 'intern',
      subItems: [
        { subName: '기업형태', subPath: 'company_type' },
        { subName: '모집직무', subPath: 'job_position' },
        { subName: '근무지역', subPath: 'work_location' },
      ],
    },
    {
      name: '취준job담',
      path: 'community',
      subItems: [
        { subName: '공모전/대외활동', subPath: 'competitions_external_activities' },
        { subName: '자격증/어학', subPath: 'certifications_language_proficiency' },
        { subName: '인턴', subPath: 'intern' },
        { subName: '스터디', subPath: 'study' },
        { subName: '취업선배 Q&A', subPath: 'job_senior_qa' },
        { subName: '자유게시판', subPath: 'general_discussion_board' },
      ],
    },
  ];

  const nav = useNavigate();
  const moveToScrap = () => {
    nav('/scrap');
  };

  return (
    <>
      <S.HeaderContainer>
        <S.MenuContainer>
          <S.HeaderLogo>
            <Link to='/'>ALL IN JOB</Link>
          </S.HeaderLogo>
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
                          width: 'fit-content',
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
          <div style={{ flex: 1, display: 'flex', justifyContent: 'right' }}></div>
        </S.MenuContainer>
      </S.HeaderContainer>
      {isHovered && <S.Overlay />}
    </>
  );
}

export default Header;
