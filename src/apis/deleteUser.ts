import axios from 'axios';

export const deleteUser = async (email: string) => {
  return await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/user/delete`, {
    data: {
      email,
    },
  });
};
