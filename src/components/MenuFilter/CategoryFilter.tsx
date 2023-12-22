import { FC } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import CategoryButton from 'components/MenuFilter/Buttons/CategoryButton.tsx';
import theme from 'styles/theme';

const { palette, textStyle } = theme;

type Props = {
  title: string;
  categories?: string[];
  selectedCategory: string;
  onClickCategory: (category: string) => void;
  isShowSwitch: boolean;
  isOn?: boolean;
  setIsOn?: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoryFilter: FC<Props> = ({
  title,
  categories,
  selectedCategory,
  onClickCategory,
  isShowSwitch,
  isOn,
  setIsOn,
}) => {
  const INTEREST_SWITCH = 'INTEREST_SWITCH';
  // const [isOn, setIsOn] = useState(false);
  const navigate = useNavigate();

  const onChangeSwitch = () => {
    if (!localStorage.getItem('accessToken')) return navigate('/login');
    if (isOn && setIsOn) {
      setIsOn(prev => !prev);
    }
  };
  return (
    <>
      <Title>{title}</Title>
      <CategoryFilterFooter>
        <Categoies>
          {categories?.map(category => (
            <li key={category}>
              <CategoryButton
                category={category}
                isSelected={selectedCategory === category}
                onClickCategory={onClickCategory}
              />
            </li>
          ))}
        </Categoies>

        {isShowSwitch && (
          <UserInterestWrapper>
            <UserInterestText>나의관심커리어</UserInterestText>

            <ToggleSwitch htmlFor={INTEREST_SWITCH} isActive={isOn ?? false}>
              <input
                type='checkbox'
                id={INTEREST_SWITCH}
                checked={isOn}
                onChange={() => onChangeSwitch()}
                hidden
              />
              <ToggleBallContainer>
                <ToggleBall isOn={isOn ?? false} />
              </ToggleBallContainer>
            </ToggleSwitch>
          </UserInterestWrapper>
        )}
      </CategoryFilterFooter>
    </>
  );
};

export default CategoryFilter;

const Title = styled.h2`
  font-size: ${textStyle.headLine02.fontSize};
  font-family: Bold;
  line-height: ${textStyle.headLine02.lineHeight};
  letter-spacing: 0.134px;
  margin-bottom: 16px;
`;

const CategoryFilterFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Categoies = styled.ul`
  display: flex;
  align-items: center;
  > li:not(:last-of-type) {
    margin-right: 16px;
  }
`;

const UserInterestWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserInterestText = styled.p`
  margin-right: 11px;
  color: ${palette.orange500};
  font-size: ${textStyle.body01.fontSize};
  font-family: Bold;
  line-height: ${textStyle.body01.lineHeight};
`;

const ToggleSwitch = styled.label<{ isActive: boolean }>`
  display: inline-block;
  width: 52px;
  height: 32px;
  border: 2px solid ${props => (props.isActive ? palette.orange500 : palette.line.normal)};
  border-radius: 30px;
  background-color: ${palette.background.primary50};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

const ToggleBallContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 6px;
`;

const ToggleBall = styled.span<{ isOn: boolean }>`
  display: inline-block;
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.isOn ? palette.orange500 : palette.line.normal)};
  transform: translateY(-50%) translateX(${({ isOn }) => (isOn ? 'calc(100% + 4px)' : 0)});
  transition: all 0.3s ease-in-out;
`;
