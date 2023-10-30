import { Certificate } from 'types/certificate.type';
import { Community } from 'types/community.type';

import CertificateItem from 'components/CertificateItem/CertificateItem';
import CommunityItem from 'components/CommunityItem/CommunityItem';

type Props = {
  data: Certificate[] | Community[];
  selectCertificate: boolean;
};

export const PostList = ({ data, selectCertificate }: Props) => {
  console.log(selectCertificate);
  return (
    <section>
      {data.map(el => {
        if ('institution' in el) {
          return (
            <CertificateItem
              examSchedules={[]}
              location={'main'}
              id=''
              key={el.id}
              title={el.title}
              institution={el.institution}
              relateDepartment={el.relateDepartment}
              scrap={el.scrap}
              view={el.view}
              mainImage={el.mainImage}
            />
          );
        }
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
      })}
    </section>
  );
};
