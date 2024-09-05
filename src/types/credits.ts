type CreditsMedia = {
	backdrop_path: string | null;
	id: number;
	title: string;
	original_title: string;
	overview: string;
	poster_path: string | null;
	media_type: 'movie' | 'tv';
	adult: boolean;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	character: string;
};

type CreditPerson = {
	id: number;
	name: string;
	original_name: string;
	media_type: 'person';
	adult: boolean;
	popularity: number;
	gender: 1 | 2; // 1 for female, 2 for male
	known_for_department: string;
	profile_path: string | null;
};

export type CreditsResponse = {
	credit_type: 'cast' | 'crew';
	department: string;
	job: string;
	media: CreditsMedia;
	media_type: 'movie' | 'tv';
	id: string;
	person: CreditPerson;
};
