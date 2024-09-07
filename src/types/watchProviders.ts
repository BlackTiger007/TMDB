export type AvailableRegionsResponse = {
	results: results[];
};

type results = {
	iso_3166_1: string;
	english_name: string;
	native_name: string;
};
