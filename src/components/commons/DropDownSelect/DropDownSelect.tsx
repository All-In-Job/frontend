import { ReactComponent as ExpendMoreIcon } from 'assets/icons/icon_expend_more.svg';
import { ReactComponent as ReversExpendMoreIcon } from 'assets/icons/icon_revers_expend_more.svg';
import Select, { StylesConfig, components, DropdownIndicatorProps, ActionMeta } from 'react-select';

import theme from 'styles/theme';

const { textStyle } = theme;
const { palette } = theme;

const customStyles: StylesConfig = {
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
  placeholder: provided => ({
    ...provided,
    ...textStyle.title02,
    fontFamily: 'Medium',
    color: palette.black200,
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'white',
    marginTop: '1px',
    borderRadius: '0px',
    zIndex: '2',
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
    '&:hover': palette.background.primary,
    backgroundColor: isSelected ? palette.background.primary : provided.backgroundColor,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};

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

type Props = {
  options: { value: string; label: string }[];
  placeholder: string;
  onChangeDropDownSelect: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
};

export const DropDownSelect = ({ options, placeholder, onChangeDropDownSelect }: Props) => {
  return (
    <Select
      placeholder={placeholder}
      onChange={onChangeDropDownSelect}
      openMenuOnFocus={false}
      options={options}
      components={{ DropdownIndicator }}
      styles={customStyles}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: palette.background.primary,
          primary50: palette.background.primary,
        },
      })}
    />
  );
};
