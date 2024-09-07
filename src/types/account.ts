type Avatar = {
	gravatar: {
		hash: string | null;
	};
	tmdb: {
		avatar_path: string | null;
	};
};

export type DetailsResponse = {
	avatar: Avatar;
	id: number;
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	include_adult: boolean;
	username: string;
};
