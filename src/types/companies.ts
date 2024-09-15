export type DetailsResponse = {
	id: number;
	name: string;
	headquarters: string;
	homepage: string | null;
	logo_path: string | null;
	origin_country: string;
	parent_company: string | null;
	description: string;
};

export type AlternativeNamesResponse = {
	id: number;
	results: Array<{
		name: string;
		type: string;
	}>;
};

export type ImagesResponse = {
	id: number;
	logos: Array<{
		aspect_ratio: number;
		file_path: string;
		height: number;
		id: string;
		file_type: string;
		vote_average: number;
		vote_count: number;
		width: number;
	}>;
};
