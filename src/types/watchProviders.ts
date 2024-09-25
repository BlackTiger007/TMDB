export type AvailableRegionsResponse = {
	results: results[];
};

type results = {
	iso_3166_1: string;
	english_name: string;
	native_name: string;
};

export type ProvidersResponse = {
	results: Provider[];
};

type DisplayPriorities = {
	[countryCode: string]: number;
};

type Provider = {
	display_priorities: DisplayPriorities;
	display_priority: number;
	logo_path: string | null;
	provider_name: string;
	provider_id: number;
};
