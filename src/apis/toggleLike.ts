import { likeCommunityApi } from 'apis';

export const toggleLikeCommunityDetail = async (detailId: string) => {
  return await likeCommunityApi({
    method: 'patch',
    url: detailId,
  });
};
