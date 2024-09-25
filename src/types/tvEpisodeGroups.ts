export type DetailsResponse = {
	description: string;
	episode_count: number;
	group_count: number;
	groups: {
		id: string;
		name: string;
		order: number;
		episodes: {
			air_date: string;
			episode_number: number;
			id: number;
			name: string;
			overview: string;
			production_code: string;
			runtime: number | null;
			season_number: number;
			show_id: number;
			still_path: string | null;
			vote_average: number;
			vote_count: number;
			order: number;
		}[];
		locked: boolean;
	}[];
	id: string;
	name: string;
	network: {
		id: number;
		logo_path: string | null;
		name: string;
		origin_country: string | null;
	};
	type: number;
};
