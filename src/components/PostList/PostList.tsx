import { FC } from 'react';

import { Certificate } from 'types/certificate.type';
import { Community } from 'types/community.type';

import CertificateItem from 'components/Certificate/CertificateItem/CertificateItem';
import CommunityItem from 'components/Community/CommunityItem/CommunityItem';

type Props = {
  data: Certificate[] | Community[];
  selectCertificate: boolean;
  isLoad: boolean;
};

export const PostList: FC<Props> = ({ data, isLoad }) => {
  if (data)
    return (
      <section>
        {data.map(el => {
          if ('institution' in el) {
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
                  isScrap={el.isScrap}
                />
              );
            } else {
              return (
                <CertificateItem
                  examSchedules={[]}
                  location={'main'}
                  id={el.id}
                  key={el.id}
                  title={''}
                  institution={''}
                  relateDepartment={''}
                  scrap={0}
                  view={0}
                  mainImage={''}
                  type={el.type}
                  isScrap={el.isScrap}
                />
              );
            }
          }
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
            return (
              <CommunityItem
                key={el.id}
                id={el.id}
                category={''}
                title={''}
                view={0}
                like={0}
                comment={0}
                date={''}
                user={el.user}
              />
            );
          }
        })}
      </section>
    );
};
