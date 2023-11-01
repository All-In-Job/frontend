import { Link } from 'react-router-dom';
import { Common } from 'types/common.type';

import * as S from './CommonDetailPageInfo.styles';

const tableData = {
  organization: '주최기관',
  period: '접수기간',
  awardsScale: '시상규모',
  target: '참여대상',
  benefits: '활동혜택',
  institution: '기업형태',
  interests: '관심분야',
  homepage: '홈페이지',
};

export const CommonDetailPageInfo = ({
  mainImage,
  enterprise,
  institution,
  target,
  date,
  scale,
  benefits,
  interests,
  homePage,
}: Common) => {
  return (
    <S.Container>
      <S.Img src={mainImage} />
      <S.Table>
        <S.Tbody>
          <tr>
            <th>{tableData.organization}</th>
            <td>{enterprise}</td>
          </tr>
          <tr>
            <th>{tableData.period}</th>
            <td>{date}</td>
          </tr>
          <tr>
            <th>{tableData.awardsScale}</th>
            <td>{scale + '만원'}</td>
          </tr>
          <tr>
            <th>{tableData.target}</th>
            <td>{target}</td>
          </tr>
        </S.Tbody>
        <S.Tbody>
          <tr>
            <th>{tableData.benefits}</th>
            <td>{benefits}</td>
          </tr>
          <tr>
            <th>{tableData.institution}</th>
            <td>{institution}</td>
          </tr>
        </S.Tbody>
        <S.HorizontalRule />
        <S.Tbody>
          <tr>
            <th>{tableData.interests}</th>
            <td className='tag'>
              {interests.split(',').map(el => {
                return <span key={el}>{el}</span>;
              })}
            </td>
          </tr>
          <tr>
            <th>{tableData.homepage}</th>
            <td>
              <Link to={homePage}>{homePage}</Link>
            </td>
          </tr>
        </S.Tbody>
      </S.Table>
    </S.Container>
  );
};
