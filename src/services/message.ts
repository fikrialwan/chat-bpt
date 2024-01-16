import instance from "../lib/axios";
import { apiUrl } from "../utils/api-url";

export const messageServices = {
  async send(question: string) {
    try {
      const formData = new FormData();
      formData.append("question", question);

      const res = await instance.post(apiUrl.send, formData);

      return res.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
