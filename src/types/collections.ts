export type MoviePart = {
	adult: boolean;
	backdrop_path: string | null;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string | null;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type DetailsResponse = {
	id: number;
	name: string;
	overview: string;
	poster_path: string | null;
	backdrop_path: string | null;
	parts: MoviePart[];
};

type TranslationData = {
	title: string;
	overview: string;
	homepage: string | null;
};

type Translation = {
	iso_3166_1: string;
	iso_639_1: string;
	name: string;
	english_name: string;
	data: TranslationData;
};

export type TranslationsResponse = {
	id: number;
	translations: Translation[];
};

type Backdrop = {
	aspect_ratio: number;
	height: number;
	iso_639_1: string | null;
	file_path: string;
	vote_average: number;
	vote_count: number;
	width: number;
};

export type ImagesResponse = {
	id: number;
	backdrops: Backdrop[];
};
