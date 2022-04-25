import { api } from "@utils";

export const getAllPhrases = async (query) => {
  const res = await api.get("/api/phrases");

  return res.data;
};

export const getOnePhrase = async (id) => {
  const res = await api.get(`/api/phrases/${id}`);

  return res.data;
};
