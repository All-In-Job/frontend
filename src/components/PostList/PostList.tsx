import { Certificate } from 'types/certificate.type';
import { Community } from 'types/community.type';

import CertificateItem from 'components/Certificate/CertificateItem/CertificateItem';
import CommunityItem from 'components/Community/CommunityItem/CommunityItem';

type Props = {
  data: Certificate[] | Community[];
  selectCertificate: boolean;
};

export const PostList = ({ data }: Props) => {
  if (data)
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
                type={el.type}
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
