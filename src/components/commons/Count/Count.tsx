import * as S from './Count.styles';

type Props = {
  children: React.ReactNode;
  count: number | undefined;
};

export const Count = ({ children, count }: Props) => {
  return (
    <S.CountWrapper>
      {children}
      <p>{count}</p>
    </S.CountWrapper>
  );
};
