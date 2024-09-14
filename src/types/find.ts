import { MoviePart } from './collections';

export type FindByIDResponse = {
	movie_results: MoviePart[];
	person_results: any[];
	tv_results: any[];
	tv_episode_results: any[];
	tv_season_results: any[];
};
