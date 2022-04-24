import { api } from "@utils";

export const getAllPhrases = async (query) => {
  const res = await api.get("/v1/phrases");

  return res.data;
};
