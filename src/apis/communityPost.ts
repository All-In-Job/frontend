import { postCommunityApi } from 'apis';

type CommunityValue = {
  category: string;
  title: string;
  detail: string;
};

export const SubmitCommunity = async (value: CommunityValue) => {
  return await postCommunityApi({
    method: 'post',
    data: value,
  });
};
