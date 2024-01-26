import { useSearchParams } from 'react-router-dom';

export const useControlPageParam = () => {
  const [searchParameter, setSearchParameter] = useSearchParams({ page: '1' });
  const getPageParam = searchParameter.get('page');

  const increasePage = () => {
    const currentValue = Number(getPageParam);
    const increaseValue = currentValue + 1;
    searchParameter.set('page', String(increaseValue));
    setSearchParameter(searchParameter);
  };

  const decreasePage = () => {
    const currentValue = Number(getPageParam);
    if (currentValue === 1) return;
    const decreaseValue = currentValue - 1;
    searchParameter.set('page', String(decreaseValue));
    setSearchParameter(searchParameter);
  };

  const selectedNumberPage = (selectedNumber: number) => {
    const selectedValue = selectedNumber;
    searchParameter.set('page', String(selectedValue));
    setSearchParameter(searchParameter);
  };

  return {
    getPageParam,
    searchParameter,
    setSearchParameter,
    increasePage,
    decreasePage,
    selectedNumberPage,
  };
};
