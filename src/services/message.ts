import { LOGIN_FLAG } from "../config/constants";
import instance from "../lib/axios";
import { apiUrl } from "../utils/api-url";
import { accessTokenLocalstorage } from "../utils/localstorage";

export const messageServices = {
  async send(question: string, history: object) {
    try {
      const formData = new FormData();
      formData.append("question", question);
      formData.append("history", JSON.stringify(history));

      const res = await instance.post(apiUrl.send, formData, {
        headers: {
          token: LOGIN_FLAG ? undefined : accessTokenLocalstorage.get(),
        },
      });

      return res.data;
    } catch (_) {
      throw new Error();
    }
  },
};
