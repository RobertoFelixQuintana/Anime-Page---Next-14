"use server";

import AnimeCard from "@/components/AnimeCard";
import { BASE_URL_FETCH_API } from "@/constants";
import { IAnimeGetResponse } from "@/types";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `${BASE_URL_FETCH_API}/animes?page=${page}&limit=8&order=popularity`
  );
  const data: Array<IAnimeGetResponse> = await response.json();

  return data.map((item, index) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
