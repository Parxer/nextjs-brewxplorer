import { Beer } from "@/app/types";

const API_URL = "https://punkapi.online/v3";

export const getImageUrl = (image: string) => `${API_URL}/images/${image}`;

export async function safeFetch<T>(url: string): Promise<T> | never {
  try {
    const response = await fetch(`${API_URL}${url}`);
    if (!response.ok) {
      return Promise.reject(
        new Error(
          `(${response.status}): ${response.statusText || "Unknown error"}`,
        ),
      );
    }
    const data = await response.json();
    return data as T; //TODO: type-safe return
  } catch (e) {
    return Promise.reject(new Error("Unknown error", { cause: e }));
  }
}

export const fetchRandomBeer = async () => safeFetch<Beer>(`${API_URL}/random`);

export const fetchBeer = async (beerId: number) =>
  safeFetch<Beer>(`${API_URL}/beers/${beerId}`);
