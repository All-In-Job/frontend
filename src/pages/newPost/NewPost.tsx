import { ReactComponent as ExpendMoreIcon } from 'assets/icons/icon_expend_more.svg';
import { ReactComponent as ReversExpendMoreIcon } from 'assets/icons/icon_revers_expend_more.svg';
import Select, { StylesConfig, components, DropdownIndicatorProps } from 'react-select';

import theme from 'styles/theme';

import * as S from './newPost.styles';
const { textStyle } = theme;
const { palette } = theme;

const options = [
  { value: '자격증/어학', label: '공모전/대외활동' },
  { value: '인턴', label: '공모전/대외활동' },
  { value: '스터디', label: '공모전/대외활동' },
  { value: '취업선배 Q&A', label: '취업선배 Q&A' },
  { value: '자유게시판', label: '자유게시판' },
];

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <div
        style={{
          width: '24px',
          height: '24px',
        }}
      >
        {props.selectProps.menuIsOpen ? <ReversExpendMoreIcon /> : <ExpendMoreIcon />}
      </div>
    </components.DropdownIndicator>
  );
};

const customStyles: StylesConfig = {
  container: provided => ({
    ...provided,
  }),
  control: (provided, state) => ({
    ...provided,
    '&:hover': 'none',
    border:
      state.menuIsOpen || state.isFocused
        ? `${palette.orange500} 2px solid`
        : `${palette.black200} 1px solid`,
    borderRadius: state.menuIsOpen ? '4px 4px 0px 0px' : provided.borderRadius,
    boxShadow: state.menuIsOpen ? '0px 3px 6px #00000047' : 'none',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'white',
    marginTop: '1px',
    borderRadius: '0px',
  }),
  menuList: provided => ({
    ...provided,
    padding: '0px',
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    ...textStyle.title02,
    fontFamily: 'Medium',
    color: palette.black500,
    backgroundColor: isSelected ? palette.background.primary : provided.backgroundColor,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};

export const NewPost = () => {
  return (
    <S.Container>
      <S.Title>올인잡님의 생각을 나눠보세요!</S.Title>
      <form>
        <S.SelectContainer>
          <label htmlFor='select'>주제</label>
          <Select
            openMenuOnFocus={false}
            options={options}
            components={{ DropdownIndicator }}
            styles={customStyles}
          />
        </S.SelectContainer>
        <div>
          <label></label>
          <input type='text' />
        </div>
        <div></div>
      </form>
    </S.Container>
  );
};
