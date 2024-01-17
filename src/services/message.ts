import instance from "../lib/axios";
import { apiUrl } from "../utils/api-url";

export const messageServices = {
  async send(question: string, history: object) {
    try {
      const formData = new FormData();
      formData.append("question", question);
      formData.append("history", JSON.stringify(history))

      const res = await instance.post(apiUrl.send, formData);

      return res.data;
    } catch (error) {
      throw new Error(error as string);
    }
  },
};
