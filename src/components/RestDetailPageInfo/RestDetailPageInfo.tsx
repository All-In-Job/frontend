import { Link } from 'react-router-dom';
import { Rest } from 'types/rest.type';

import * as S from './RestDetailPageInfo.styles';

type Props = Omit<Rest, 'detail'> & { menuName: string | undefined };

export const RestDetailPageInfo = ({
  menuName,
  mainImage,
  enterprise,
  institution,
  target,
  period,
  participationPeriod,
  preferentialTreatment,
  scale,
  benefits,
  interests,
  field,
  homePage,
  location,
  personnel,
}: Props) => {
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
            <td>{enterprise}</td>
          </tr>
          <tr>
            <th>{'접수기간'}</th>
            <td>{period}</td>
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

          {!competitionRender && (
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

          {!internRender && (
            <tr>
              <th>{'활동혜택'}</th>
              <td>{benefits}</td>
            </tr>
          )}

          <tr>
            <th>{'기업형태'}</th>
            <td>{institution}</td>
          </tr>
        </S.Tbody>

        <S.HorizontalRule />
        <S.Tbody className='second'>
          {outsideRender && (
            <tr>
              <th>{'활동분야'}</th>
              <td className='tag'>
                {field &&
                  field.split(',').map((el: string, idx: number) => {
                    return <span key={idx}>{el}</span>;
                  })}
              </td>
            </tr>
          )}

          {!internRender && (
            <tr>
              <th>{competitionRender ? '공모분야' : '관심분야'}</th>
              <td className='tag'>
                {interests &&
                  interests.split(',').map((el: string, idx: number) => {
                    return <span key={idx}>{el}</span>;
                  })}
              </td>
            </tr>
          )}

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
