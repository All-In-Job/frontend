import { Certificate } from 'types/certificate.type';
import { Community } from 'types/community.type';

import CertificateItem from 'components/CertificateItem/CertificateItem';
import CommunityItem from 'components/CommunityItem/CommunityItem';

type Props = {
  data: Certificate[] | Community[];
  selectCertificate: boolean;
};

export const PostList = ({ data, selectCertificate }: Props) => {
  return (
    <section>
      {data.map(el => {
        return selectCertificate ? (
          <CertificateItem
            location={'main'}
            key={el.id}
            title={el.title}
            institution={el.institution}
            relatedDepartment={el.relatedDepartment}
            scrap={el.scrap}
            view={el.view}
            image={el.image}
          />
        ) : (
          <CommunityItem
            key={el.id}
            category={el.category}
            title={el.title}
            view={el.view}
            like={el.likeCount}
            comment={el.commentCount}
            date={el.date}
            user={el.user}
          />
        );
      })}
    </section>
  );
};
