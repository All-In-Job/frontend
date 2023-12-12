export const moneyToNumber = (benefits: string) => {
  const koreanToNumber = {
    천만원: 1000,
  };

  const amountString = benefits.match(/[0-9.]+/g);

  const amount = parseInt(amountString![0], 10) * koreanToNumber['천만원'];

  if (benefits.includes('미만')) {
    return `,${amount}`;
  } else if (benefits.includes('이상')) {
    return `${amount}`;
  } else {
    const maxAmount = parseInt(amountString![1], 10) * koreanToNumber['천만원'];
    return `${amount},${maxAmount}`;
  }
};
