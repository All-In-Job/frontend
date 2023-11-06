import styled from '@emotion/styled';
import { Rest } from 'types/rest.type';

type DetailProps = Omit<
  Rest,
  | 'mainImage'
  | 'enterprise'
  | 'institution'
  | 'target'
  | 'period'
  | 'participationPeriod'
  | 'preferentialTreatment'
  | 'scale'
  | 'benefits'
  | 'interests'
  | 'field'
  | 'homePage'
  | 'location'
  | 'personnel'
  | 'menuName'
>;
export const DetailDescription = ({ detail }: DetailProps) => {
  return (
    <Wrapper>
      <DetailDescriptionBox>
        <div dangerouslySetInnerHTML={{ __html: detail }}></div>
      </DetailDescriptionBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-column: span 12;
`;

const DetailDescriptionBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 32px;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 2px solid var(--orange-200, #fec4af);
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
`;
