import { Link } from 'react-router-dom';
import { Rest } from 'types/common.type';

import * as S from './CommonDetailPageInfo.styles';

export const CommonDetailPageInfo = ({
  menuName,
  mainImage,
  organization,
  institution,
  target,
  date,
  participationPeriod,
  preferentialTreatment,
  scale,
  benefits,
  interests,
  field,
  homePage,
  location,
  personnel,
}: Rest) => {
  const competitionRender = menuName === 'competition';
  const outsideRender = menuName === 'outside';
  const internRender = menuName === 'intern';

  return (
    <S.Container>
      <S.Img src={mainImage} />
      <S.Table>
        <S.Tbody>
          <tr>
            <th>{'주최기관'}</th>
            <td>{organization}</td>
          </tr>
          <tr>
            <th>{'접수기관'}</th>
            <td>{date}</td>
          </tr>

          {competitionRender && (
            <>
              <tr>
                <th>{'시상규모'}</th>
                <td>{scale + '만원'}</td>
              </tr>
              <tr>
                <th>{'참여대상'}</th>
                <td>{target}</td>
              </tr>
            </>
          )}

          {outsideRender && (
            <tr>
              <th>{'활동기간'}</th>
              <td>{participationPeriod}</td>
            </tr>
          )}

          {internRender && (
            <tr>
              <th>{'모집직무'}</th>
              <td>{preferentialTreatment}</td>
            </tr>
          )}

          {(outsideRender || internRender) && (
            <tr>
              <th>{outsideRender ? '활동지역' : '근무지역'}</th>
              <td>{location}</td>
            </tr>
          )}
        </S.Tbody>

        <S.Tbody>
          {outsideRender && (
            <>
              <tr>
                <th>{'참여대상'}</th>
                <td>{target}</td>
              </tr>
              <tr>
                <th>{'모집인원'}</th>
                <td>{personnel}</td>
              </tr>
            </>
          )}
          <tr>
            <th>{'활동혜택'}</th>
            <td>{benefits}</td>
          </tr>
          <tr>
            <th>{'기업형태'}</th>
            <td>{institution}</td>
          </tr>
        </S.Tbody>

        <S.HorizontalRule />
        <S.Tbody>
          {outsideRender && (
            <tr>
              <th>{'활동분야'}</th>
              <td className='tag'>
                {field &&
                  field.split(',').map((el, idx) => {
                    return <span key={idx}>{el}</span>;
                  })}
              </td>
            </tr>
          )}
          <tr>
            <th>{competitionRender ? '공모분야' : '관심분야'}</th>
            <td className='tag'>
              {interests &&
                interests.split(',').map((el, idx) => {
                  return <span key={idx}>{el}</span>;
                })}
            </td>
          </tr>
          <tr>
            <th>{'홈페이지'}</th>
            <td>
              <Link to={homePage} target='_blank'>
                {homePage}
              </Link>
            </td>
          </tr>
        </S.Tbody>
      </S.Table>
    </S.Container>
  );
};
