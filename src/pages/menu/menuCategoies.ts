export type MenuId = 'competition' | 'outside' | 'qnet' | 'language' | 'intern' | 'community';

export type MenuName = '공모전' | '대외활동' | '자격증' | '어학' | '인턴' | '취준job담';

export type MenuKeywords = {
  [keywordId: string]: string;
};

export type MenuItems = {
  id: string;
  category: string;
  keywords?: MenuKeywords;
};

export type MenuCategoies = {
  id: MenuId;
  title: MenuName;
  items: MenuItems[];
};

const menuCategoies: MenuCategoies[] = [
  {
    id: 'competition',
    title: '공모전',
    items: [
      {
        id: 'competition_field',
        category: '공모분야',
        keywords: {
          '기획/아이디어': '기획/아이디어',
          '광고/마케팅': '광고/마케팅',
          '사진/영상/UCC': '사진/영상/UCC',
          '디자인/순수예술/공예': '디자인/순수예술/공예',
          '네이밍/슬로건': '네이밍/슬로건',
          '캐릭터/만화/게임': '캐릭터/만화/게임',
          '건축/건설/인테리어': '건축/건설/인테리어',
          '과학/공학': '과학/공학',
          '예체능/패션': '예체능/패션',
          '전시/패션': '전시/패션',
          '문학/시나리오': '문학/시나리오',
          해외: '해외',
          학술: '학술',
          창업: '창업',
          기타: '기타',
        },
      },
      {
        id: 'award_scale',
        category: '시상규모',
        keywords: {
          '1천만원 미만': '1천만원 미만',
          '1천만원~3천만원': '1천만원~3천만원',
          '3천만원~5천만원': '3천만원~5천만원',
          '5천만원 이상': '5천만원 이상',
        },
      },
      {
        id: 'award_benefits',
        category: '수상혜택',
        keywords: {
          '입사 가산점': '입사 가산점',
          '인턴/정규직채용': '인턴/정규직채용',
          '해외연수/전시기회': '해외연수/전시기회',
          '실제 상용화': '실제 상용화',
          '상장 수여': '상장 수여',
          기타: '기타',
        },
      },
      {
        id: 'support_target',
        category: '지원대상',
        keywords: {
          청소년: '청소년',
          '대상 제한 없음': '대상 제한 없음',
          대학생: '대학생',
          '직장인/일반인': '직장인/일반인',
        },
      },
    ],
  },
  {
    id: 'outside',
    title: '대외활동',
    items: [
      {
        id: 'activity_field',
        category: '활동분야',
        keywords: {
          서포터즈: '서포터즈',
          '해외탐방/무료': '해외탐방/무료',
          '해외탐방/유료': '해외탐방/유료',
          '봉사단/해외': '봉사단/해외',
          '봉사단/국내': '봉사단/국내',
          마케터: '마케터',
          기자단: '기자단',
          강연: '강연',
          멘토링: '멘토링',
          기타: '기타',
        },
      },
      {
        id: 'area_of_interest',
        category: '관심분야',
        keywords: {
          '여행/호텔/항공': '여행/호텔/항공',
          '언론/미디어': '언론/미디어',
          '문화/역사': '문화/역사',
          '행사/페스티벌': '행사/페스티벌',
          교육: '교육',
          '디자인/예술/영상': '디자인/예술/영상',
          '경제/금융': '경제/금융',
          '경영/컨설팅/마케팅': '경영/컨설팅/마케팅',
          '정치/사회/법률': '정치/사회/법률',
          '체육/헬스': '체육/헬스',
          '의료/보건': '의료/보건',
          '뷰티/미용/화장품': '뷰티/미용/화장품',
          '과학/공학/기술/IT': '과학/공학/기술/IT',
          '요리/식품': '요리/식품',
          '창업/자기계발': '창업/자기계발',
          '환경/에너지': '환경/에너지',
          콘텐츠: '콘텐츠',
          '사회공헌/교류': '사회공헌/교류',
          '유통/물류': '유통/물류',
          기타: '기타',
        },
      },
      {
        id: 'activity_benefits',
        category: '활동혜택',
        keywords: {
          활동비: '활동비',
          '사은품 지급': '사은품 지급',
          실무교육: '실무교육',
          '전문가/임직원 멘토링': '전문가/임직원 멘토링',
          봉사활동시간: '봉사활동시간',
          행사참여: '행사참여',
          '수료증 및 인증서': '수료증 및 인증서',
          '입사시 혜택': '입사시 혜택',
          '인턴쉽 기회': '인턴쉽 기회',
          교통비: '교통비',
        },
      },
      {
        id: 'activity_duration',
        category: '활동기간',
        keywords: {
          '3개월 이하': '3개월 이하',
          '3개월~6개월': '3개월~6개월',
          '6개월~1년': '6개월~1년',
          '1년 이상': '1년 이상',
        },
      },
      {
        id: 'location',
        category: '지역',
        keywords: {
          '지역 제한없음': '지역 제한없음',
          서울: '서울',
          부산: '부산',
          대구: '대구',
          인천: '인천',
          광주: '광주',
          대전: '대전',
          울산: '울산',
          경기: '경기',
          강원: '강원',
          충청: '충청',
          전라: '전라',
          경상: '경상',
          제주: '제주',
          세종: '세종',
          해외: '해외',
        },
      },
    ],
  },
  {
    id: 'qnet',
    title: '자격증',
    items: [
      {
        id: 'technical',
        category: '국가기술자격증',
        keywords: {
          '경영.회계.사무': '경영/회계/사무',
          '보건.의료': '보건/의료',
          '문화예술.디자인.방송': '문화예술/디자인/방송',
          '사회복지.종교': '사회복지/종교',
          '이용.숙박.여행.오락.스포츠': '이용/숙박/여행/오락/스포츠',
          음식서비스: '음식서비스',
          기계: '기계',
          정보통신: '정보통신',
          '식품.가공': '식품/가공',
          '환경.에너지': '환경/에너지',
        },
      },
      {
        id: 'professional',
        category: '국가전문자격증',
        keywords: {
          보건복지부: '보건복지부',
          환경부: '환경부',
          고용노동부: '고용노동부',
          해양수산부: '해양수산부',
          중소벤처기업부: '중소벤처기업부',
          경찰청: '경찰청',
          공정거래위원회: '공정거래위원회',
          문화체육관광부: '문화체육관광부',
          문화재청: '문화재청',
          관세청: '관세청',
          여성가족부: '여성가족부',
          행정안전부: '행정안전부',
          농림축산식품부: '농림축산식품부',
          국토교통부: '국토교통부',
          소방청: '소방청',
          국세청: '국세청',
          특허청: '특허청',
        },
      },
    ],
  },
  {
    id: 'language',
    title: '어학',
    items: [
      {
        id: 'english',
        category: '영어',
        keywords: {
          toeic: 'TOEIC',
          toeicBR: 'TOEIC (Bridge)',
          toeicSW: 'TOEIC (Speaking, Writing)',
          toeicWT: 'TOEIC (Writing)',
          toeicST: 'TOEIC (Speaking)',
        },
      },
      {
        id: 'japanese',
        category: '일본어',
        keywords: { jp: 'JPT', jpSP: 'SJPT일본어 말하기 시험' },
      },
      {
        id: 'chinese',
        category: '중국어',
        keywords: { ch: 'TSC중국어 말하기 시험' },
      },
    ],
  },
  {
    id: 'intern',
    title: '인턴',
    items: [
      {
        id: 'company_type',
        category: '기업형태',
        keywords: {
          대기업: '대기업',
          중소기업: '중소기업',
          '공공기관/공기업': '공공기관/공기업',
          외국계기업: '외국계기업',
          중견기업: '중견기업',
          '비영리단체/협회/재단': '비영리단체/협회/재단',
          스타트업: '스타트업',
          금융권: '금융권',
          병원: '병원',
          '동아리/학생자치단체': '동아리/학생자치단체',
          기타: '기타',
        },
      },
      {
        id: 'job_position',
        category: '모집직무',
        keywords: {
          '영업/고객상담': '영업/고객상담',
          '경영/사무': '경영/사무',
          '마케팅/광고/홍보': '마케팅/광고/홍보',
          '생산/제조': '생산/제조',
          '연구개발/설계': '연구개발/설계',
          'IT/인터넷': 'IT/인터넷',
          서비스: '서비스',
          '무역/유통': '무역/유통',
          의료: '의료',
          건설: '건설',
          교육: '교육',
          디자인: '디자인',
          '전문/특수직': '전문/특수직',
          미디어: '미디어',
          기타: '기타',
        },
      },
      {
        id: 'work_location',
        category: '근무지역',
        keywords: {
          '지역 제한없음': '지역 제한없음',
          서울: '서울',
          부산: '부산',
          대구: '대구',
          인천: '인천',
          광주: '광주',
          대전: '대전',
          울산: '울산',
          경기: '경기',
          강원: '강원',
          충청: '충청',
          전라: '전라',
          경상: '경상',
          제주: '제주',
          세종: '세종',
          해외: '해외',
        },
      },
    ],
  },
  {
    id: 'community',
    title: '취준job담',
    items: [
      { id: 'all', category: '전체' },
      { id: 'competitions_external_activities', category: '공모전/대외활동' },
      { id: 'certifications_language_proficiency', category: '자격증/어학' },
      { id: 'intern', category: '인턴' },
      { id: 'study', category: '스터디' },
      { id: 'job_senior_qa', category: '취업선배Q&A' },
      { id: 'general_discussion_board', category: '자유게시판' },
    ],
  },
];

export const getMenuById = (menuName: MenuId) => {
  const foundMenuCategories = menuCategoies.find(menu => menu.id === menuName);

  return foundMenuCategories;
};
