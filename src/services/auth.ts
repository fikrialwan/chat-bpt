import instance from "../lib/axios";
import { apiUrl } from "../utils/api-url";

export const authServices = {
  async login(username: string, password: string) {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const res = await instance.post(apiUrl.login, formData);

      return res.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
