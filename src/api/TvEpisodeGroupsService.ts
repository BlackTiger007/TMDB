import { API } from '.';
import { DetailsResponse } from '../types/tvEpisodeGroups';

export class TvEpisodeGroupsService {
	private apiInstance: API;

	/**
	 * Initializes the PeopleListsService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Get the details of a TV episode group.
	 *
	 * This method fetches the details of a specific TV episode group by its ID.
	 *
	 * @param tvEpisodeGroupId - The unique identifier for the TV episode group.
	 * @returns A promise that resolves to the TV episode group details.
	 */
	details(tvEpisodeGroupId: string): Promise<DetailsResponse> {
		const endpoint = `tv/episode_group/${tvEpisodeGroupId}`;
		return this.apiInstance.GET<DetailsResponse>(endpoint);
	}
}
