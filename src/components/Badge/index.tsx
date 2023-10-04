import { useState } from 'react';

import MultiSelectHashTagsForIndicator from 'components/Badge/MultiSelectHashTagListForIndicator';
import MultiSelectHashTagsForSelect from 'components/Badge/MultiSelectHashTagListForSelect';
import { HashTagListData } from 'components/Badge/MultiSelectHashTagListForSelect/mock/hashTags';
import { HashTagData } from 'components/Badge/type';

export const Home = () => {
  const [selectedHashs, setSelectedHashs] = useState<HashTagData[]>([]);

  const handleSelectedHashTags = (value: HashTagData) => {
    if (selectedHashs.find(item => item.id === value.id)) {
      setSelectedHashs(selectedHashs.filter(item => item.id !== value.id));
    } else {
      setSelectedHashs([...selectedHashs, value]);
    }
  };

  const handleDeleteClick = (value: HashTagData) => {
    setSelectedHashs(selectedHashs.filter(item => item.id !== value.id));
  };

  return (
    <>
      <MultiSelectHashTagsForSelect
        onSelect={handleSelectedHashTags}
        selectedHashTagList={selectedHashs}
        hashTagList={HashTagListData}
      />
      <MultiSelectHashTagsForIndicator
        onDeleteClick={handleDeleteClick}
        selectedHashTagList={selectedHashs}
      />
    </>
  );
};
