import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 12px;
  & .react-datepicker__input-container {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--black-white-wh, #fff);
    input[type='text'] {
      /* background-image: url('./res/img/calendar.svg');
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat; */
      padding: 12px;
      width: 100%;
      height: 48px;
      border-radius: 4px;
      border: 1px solid var(--black-200, #a0a09f);
      color: var(--black-500, #121110) !important;
      font-family: SUIT;
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      ::placeholder {
        color: var(--black-200, #a0a09f);
      }
      :focus {
        border: 1px solid var(--orange-500, #fd6b36);
      }
    }
  }
  & .react-datepicker__tab-loop {
    position: absolute;
  }
  & .react-datepicker-popper {
    padding-top: 0;
  }
  & .react-datepicker {
    display: inline-flex;
    padding: 24px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    background: var(--black-white-wh, #fff);
    box-shadow:
      0px 9px 28px 8px rgba(0, 0, 0, 0.05),
      0px 6px 16px 0px rgba(0, 0, 0, 0.08),
      0px 3px 6px -4px rgba(0, 0, 0, 0.12);
    color: var(--title-black, #121110);
    text-align: center;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    & .react-datepicker__triangle {
      margin-top: 0;
      ::after {
        content: none;
      }
      ::before {
        content: none;
      }
    }
    & .react-datepicker__triangle ::after {
      border: none;
    }
    & .react-datepicker-year-header {
      font-family: SUIT;
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.134px;
    }
    & .react-datepicker__header {
      padding: 0;
      background-color: #fff;
      border-bottom: none;
      margin-bottom: 8px;
    }
    & button.react-datepicker__navigation {
      top: 23px;
    }
    & .react-datepicker__navigation-icon::before {
      border-color: #121110;
    }
    & .react-datepicker__navigation--previous {
      left: 52px !important;
    }
    & .react-datepicker__navigation--next {
      right: 53px !important;
    }
    & .react-datepicker__month {
      margin: 0;
    }
    & .react-datepicker__month-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      align-self: stretch;
    }
    & .react-datepicker__month-text {
      display: flex;
      width: 75px;
      height: 41px;
      padding: 16px 0px;
      margin: 0;
      justify-content: center;
      align-items: center;
    }
    & .react-datepicker__month-text--keyboard-selected {
      border-radius: 10px;
      color: #fff;
      background: var(--orange-500, #fd6b36);
    }
  }
`;
