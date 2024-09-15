export type CheckItemStatusResponse = {
	id: number;
	item_present: boolean;
};

export type CreateListResponse = {
	status_message: string;
	success: boolean;
	status_code: number;
	list_id: number;
};

export type DetailsResponse = {
	created_by: string;
	description: string;
	favorite_count: number;
	id: string;
	items: {
		adult: boolean;
		backdrop_path: string | null;
		genre_ids: number[];
		id: number;
		media_type: string;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
	}[];
	item_count: number;
	iso_639_1: string;
	name: string;
	poster_path: string | null;
};
