import { likeCommunityApi } from 'apis';

export const patchToggleLike = async (detailId: string) => {
  return await likeCommunityApi({
    method: 'patch',
    url: detailId,
  });
};
