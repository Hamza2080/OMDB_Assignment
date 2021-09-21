import { Movie } from "./movie.type";

export interface OmdbResponse {
  Search?: (Movie)[] | null;
  totalResults: string;
  Response: string;
}