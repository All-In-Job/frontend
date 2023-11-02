import { useEffect, useState } from 'react';

import { useOutlet, useParams } from 'react-router-dom';
import { ExamSchedule } from 'types/certificate.type';

import { ResponseData, requestDetailCrawlingData } from 'apis/detailCrawling';
import { CertificateDetailInfo } from 'components/Certificate/CertificateDetailInfo/CertificateDetailInfo';
import { CertificateExamSchedule } from 'components/Certificate/CertificateExamSchedule/CertificateExamSchedule';
import { CommunityDetail } from 'components/Community/CommunityDetail/CommunityDetail';
import { DetailPageInfo } from 'components/DetailPageInfo';

import * as S from './index.styles';

export const DetailPage = () => {
  const { menuName, detailId } = useParams();
  const [detailData, setDetailData] = useState<ResponseData>();
  const out = useOutlet();
  console.log(out);

  const pathProps = (data: ExamSchedule[]) => {
    return data && data[0];
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await requestDetailCrawlingData(menuName, detailId);
        if (res) {
          setDetailData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, detailId]);

  if (detailData)
    return (
      <>
        <CommunityDetail />
        {menuName !== 'community' && (
          <>
            <DetailPageInfo
              title={detailData.title}
              dDay={12}
              bookmarkCount={detailData.scrap}
              viewCount={detailData.view}
            >
              {/* 상황에 맞는 컴포넌트 추가 */}
              {menuName === 'qnet' && (
                <CertificateDetailInfo
                  mainImage={detailData.mainImage}
                  title={detailData.title}
                  enTitle={detailData.enTitle}
                  relateDepartment={detailData.relateDepartment}
                  institution={detailData.institution}
                />
              )}
            </DetailPageInfo>

            <S.Container>
              <S.Title>{'시험일정'}</S.Title>
              {/* 상황에 맞는 컴포넌트 추가 */}
              {menuName === 'qnet' && (
                <CertificateExamSchedule
                  id={pathProps(detailData.examSchedules)?.id}
                  key={pathProps(detailData.examSchedules)?.id}
                  turn={pathProps(detailData.examSchedules)?.turn}
                  wtReceipt={pathProps(detailData.examSchedules)?.wtReceipt}
                  wtDday={pathProps(detailData.examSchedules)?.wtDday}
                  wtResultDay={pathProps(detailData.examSchedules)?.wtResultDay}
                  ptReceipt={pathProps(detailData.examSchedules)?.ptReceipt}
                  ptDday={pathProps(detailData.examSchedules)?.ptDday}
                  resultDay={pathProps(detailData.examSchedules)?.resultDay}
                />
              )}
            </S.Container>
          </>
        )}
      </>
    );
};
