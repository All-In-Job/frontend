import { FC } from 'react';

type CurrentDate = {
  year: number;
  month: number;
};
type TopBarPropsType = {
  currentDate: CurrentDate;
  setCurrentDate: (value: CurrentDate) => void;
};

export const TopBar: FC<TopBarPropsType> = ({ currentDate, setCurrentDate }) => {
  const buttonStyle = {
    borderRadius: '100%',
    border: 'none',
    width: '35px',
    aspectRatio: 1,
    cursor: 'pointer',
  };

  const changeMonth = (target: 'prev' | 'next') => {
    const { month } = currentDate;
    const calculatedMonth = target === 'prev' ? month - 1 : month + 1;

    if (calculatedMonth < 0)
      setCurrentDate({
        year: currentDate.year - 1,
        month: 11,
      });
    else if (calculatedMonth > 11)
      setCurrentDate({
        year: currentDate.year + 1,
        month: 0,
      });
    else setCurrentDate({ ...currentDate, month: calculatedMonth });
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <button style={buttonStyle} onClick={() => changeMonth('prev')}>
        {'<'}
      </button>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <span>
          {currentDate.year}년 {currentDate.month + 1}월
        </span>
      </div>
      <button style={buttonStyle} onClick={() => changeMonth('next')}>
        {'>'}
      </button>
    </header>
  );
};
