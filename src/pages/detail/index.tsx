import { useEffect, useState } from 'react';

import { useOutlet, useParams } from 'react-router-dom';
import { ExamSchedule } from 'types/certificate.type';

import { ResponseData, requestDetailCrawlingData } from 'apis/detailCrawling';
import { CertificateDetailInfo } from 'components/Certificate/CertificateDetailInfo/CertificateDetailInfo';
import { CertificateExamSchedule } from 'components/Certificate/CertificateExamSchedule/CertificateExamSchedule';
import { DetailPageInfo } from 'components/DetailPageInfo';
import { DetailDescription } from 'components/RestDetailPageInfo/DetailDescription';
import { RestDetailPageInfo } from 'components/RestDetailPageInfo/RestDetailPageInfo';

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
        <DetailPageInfo
          title={detailData.title}
          dDay={12}
          bookmarkCount={detailData.scrap}
          viewCount={detailData.view}
        >
          {/* 상황에 맞는 컴포넌트 추가 */}
          {'enterprise' in detailData && (
            <RestDetailPageInfo
              type={detailData.type}
              menuName={menuName}
              mainImage={detailData.mainImage}
              enterprise={detailData.enterprise}
              institution={detailData.institution}
              target={detailData.target}
              period={detailData.period}
              participationPeriod={detailData.participationPeriod}
              preferentialTreatment={detailData.preferentialTreatment}
              scale={detailData.scale}
              benefits={detailData.benefits}
              interests={detailData.interests}
              field={detailData.field}
              homePage={detailData.homePage}
              location={detailData.location}
              personnel={detailData.personnel}
            />
          )}

          {detailData.type === 'certificate' && (
            <CertificateDetailInfo
              type={detailData.type}
              mainImage={detailData.mainImage}
              title={detailData.title}
              enTitle={detailData.enTitle}
              relateDepartment={detailData.relateDepartment}
              institution={detailData.institution}
            />
          )}
        </DetailPageInfo>
        <S.Container>
          <S.Title>{'enterprise' in detailData ? '상세내용' : '시험일정'}</S.Title>

          {/* 상황에 맞는 컴포넌트 추가 */}
          {'enterprise' in detailData && (
            <DetailDescription type={detailData.type} detail={detailData.detail} />
          )}

          {detailData.type === 'certificate' && (
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
    );
};
