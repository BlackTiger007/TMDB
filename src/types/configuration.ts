type Images = {
	base_url: string;
	secure_base_url: string;
	backdrop_sizes: string[];
	logo_sizes: string[];
	poster_sizes: string[];
	profile_sizes: string[];
	still_sizes: string[];
};

export type DetailsResponse = {
	images: Images;
	change_keys: string[];
};

type Country = {
	iso_3166_1: string;
	english_name: string;
	native_name: string;
};

export type CountriesResponse = Country[];

type DepartmentJob = {
	department: string;
	jobs: string[];
};

export type JobsResponse = DepartmentJob[];

type Language = {
	iso_639_1: string;
	english_name: string;
	name: string;
};

export type LanguagesResponse = Language[];

export type PrimaryTranslationsResponse = string[];

type Timezone = {
	iso_3166_1: string;
	zones: string[];
};

export type TimezonesResponse = Timezone[];
