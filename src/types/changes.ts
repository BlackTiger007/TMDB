type Result = {
	id: number;
	adult: boolean;
};

export type ChangesResponse = {
	results: Result[];
	page: number;
	total_pages: number;
	total_results: number;
};
