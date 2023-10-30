import * as S from './CommonDetailPageInfo.styles';

const tableData = {
  organization: '주최기간',
  period: '접수기간',
  awardsScale: '시상규모',
  budget: '참여예산',
  benefits: '활동혜택',
  location: '활동지역',
  institution: '기업형태',
  interests: '관심분야',
  hompage: '홈페이지',
};

export const CommonDetailPageInfo = () => {
  return (
    <S.Container>
      <S.Img src='https://res.cloudinary.com/linkareer/image/fetch/f_auto,q_50/https://api.linkareer.com/attachments/288370' />
      <S.Table>
        <S.Tbody>
          <tr>
            <th>{tableData.organization}</th>
            <td>한국자동차협회</td>
          </tr>
          <tr>
            <th>{tableData.period}</th>
            <td>2023.8.21 ~ 2023.9.14</td>
          </tr>
          <tr>
            <th>{tableData.awardsScale}</th>
            <td>350만원</td>
          </tr>
          <tr>
            <th>{tableData.budget}</th>
            <td>350만원</td>
          </tr>
        </S.Tbody>
        <S.Tbody>
          <tr>
            <th>{tableData.benefits}</th>
            <td>입사시 가산점, 상장 수여</td>
          </tr>
          <tr>
            <th>{tableData.location}</th>
            <td>서울시</td>
          </tr>
          <tr>
            <th>{tableData.institution}</th>
            <td>공기관/공기업</td>
          </tr>
        </S.Tbody>
        <S.HorizontalRule />
        <S.Tbody>
          <tr>
            <th>{tableData.interests}</th>
            <td className='tag'>
              <span>#광고/마케팅</span>
              <span>#사진/영상/UCC</span>
            </td>
          </tr>
          <tr>
            <th>{tableData.hompage}</th>
            <td>공기관/공기업</td>
          </tr>
        </S.Tbody>
      </S.Table>
    </S.Container>
  );
};
