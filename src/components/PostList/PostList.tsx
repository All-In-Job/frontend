import { FC } from 'react';

import { Certificate } from 'types/certificate.type';
import { Community } from 'types/community.type';

import CertificateItem from 'components/Certificate/CertificateItem/CertificateItem';
import SkeletonCertificate from 'components/commons/Skeleton/SkeletonCertificate';
import SkeletonCommunity from 'components/commons/Skeleton/SkeletonCommunity';
import CommunityItem from 'components/Community/CommunityItem/CommunityItem';

type Props = {
  data: Certificate[] | Community[];
  selectCertificate: boolean;
  isLoad: boolean;
};

export const PostList: FC<Props> = ({ data, isLoad }) => {
  const renderCertificate = (el: Certificate) => {
    if (isLoad) {
      return (
        <CertificateItem
          examSchedules={[]}
          location={'main'}
          id={el.id}
          key={el.id}
          title={el.title}
          institution={el.institution}
          relateDepartment={el.relateDepartment}
          scrap={el.scrap}
          view={el.view}
          mainImage={el.mainImage}
          type={el.type}
        />
      );
    } else {
      return <SkeletonCertificate key={el.id} />;
    }
  };

  const renderCommunity = (el: Community) => {
    if (isLoad) {
      return (
        <CommunityItem
          key={el.id}
          id={el.id}
          category={el.category}
          title={el.title}
          view={el.view}
          like={el.like}
          comment={el.comment}
          date={el.date}
          user={el.user}
        />
      );
    } else {
      return <SkeletonCommunity key={el.id} />;
    }
  };

  const renderPost = (el: Certificate | Community) => {
    if ('institution' in el) {
      return renderCertificate(el as Certificate);
    } else {
      return renderCommunity(el as Community);
    }
  };

  if (data) return <section>{data.map(renderPost)}</section>;
};
