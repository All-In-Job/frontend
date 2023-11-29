import styled from '@emotion/styled';
import { ActivityListData } from 'types/activityHistory';

import { ReactComponent as DeleteBtn } from 'components/ActivityHistory/res/img/delete.svg';
import { ReactComponent as EditBtn } from 'components/ActivityHistory/res/img/edit.svg';

type ActivityListProps = {
  activityList: ActivityListData[];
  onEdit: (id: string) => void;
  onDeleteFormData: (id: string) => Promise<void>;
};

export const ActivityList = ({ activityList, onEdit, onDeleteFormData }: ActivityListProps) => {
  console.log(activityList);
  return (
    <>
      {activityList.map(list => {
        return (
          <Container key={list.id}>
            <ActivityBox>
              <TextBox>
                <Title>{list.activeTitle}</Title>
                <Duration>{list.period}</Duration>
              </TextBox>
              <ButtonBox>
                <EditBtn onClick={() => onEdit(list.id)} />
                <DeleteBtn onClick={() => onDeleteFormData(list.id)} />
              </ButtonBox>
            </ActivityBox>
            <Description>{list.activeContent}</Description>
            <Score>{list.score && `점수 | ${list.score}`}</Score>
          </Container>
        );
      })}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
  color: ${props => props.theme.palette.black300};
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin: 24px 0;
`;

const ActivityBox = styled.div`
  display: flex;
  color: ${props => props.theme.palette.black500};
  justify-content: space-between;
  align-items: self-start;
  align-self: stretch;
  gap: 50px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Duration = styled.span`
  color: ${props => props.theme.palette.black300};
  font-size: 17px;
  line-height: 26px;
  white-space: nowrap;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  svg {
    cursor: pointer;
  }
`;

const Description = styled.div`
  align-self: auto;
  font-family: SUIT;
  font-weight: 500;
`;

const Score = styled.div`
  color: ${props => props.theme.palette.black500};
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
`;
