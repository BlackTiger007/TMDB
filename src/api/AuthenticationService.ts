import { API } from '.';
import type {
	AuthenticationCreateGuestSessionResponse,
	AuthenticationTokenResponse,
	AuthenticationPostResponse,
	AuthenticationCreateSessionWithLoginResponse,
	POST
} from '../newTypes';

export class AuthenticationService {
	private apiInstance: API;

	/**
	 * Initializes the AuthenticationService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: API) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Creates a guest session. Guest sessions allow users to perform actions like maintaining a rated list, a watchlist, and a favorite list. Guest sessions will expire if not used within 60 minutes.
	 * @returns A promise that resolves to the response containing the guest session details.
	 */
	async createGuestSession(): Promise<AuthenticationCreateGuestSessionResponse> {
		return this.apiInstance.POST<AuthenticationCreateGuestSessionResponse>(
			'authentication/guest_session/new',
			{}
		);
	}

	/**
	 * Creates a request token used to validate a TMDB user login. This is the first step in generating a session ID.
	 * @returns A promise that resolves to the response containing the request token details.
	 */
	async createRequestToken(): Promise<AuthenticationTokenResponse> {
		return this.apiInstance.GET<AuthenticationTokenResponse>('authentication/token/new');
	}

	/**
	 * Creates a session ID once a user has validated the request token. This is the third step in generating a session ID.
	 * @param requestToken - The request token obtained from the createRequestToken method.
	 * @returns A promise that resolves to the response containing the session ID details.
	 */
	async createSession(requestToken: string): Promise<AuthenticationPostResponse> {
		return this.apiInstance.POST<AuthenticationPostResponse>('authentication/session/new', {
			request_token: requestToken
		});
	}

	/**
	 * Creates a session ID from a valid v4 access token. This replaces the third step of generating a session ID if you already have a v4 token.
	 * @param v4Token - The v4 access token obtained from user authentication.
	 * @returns A promise that resolves to the response containing the session ID details.
	 */
	async createSessionFromV4Token(v4Token: string): Promise<AuthenticationPostResponse> {
		return this.apiInstance.POST<AuthenticationPostResponse>('authentication/session/convert/4', {
			access_token: v4Token
		});
	}

	/**
	 * Creates a session ID with user login. This can be used as a substitute if web view access is not available. It replaces the third step of generating a session ID.
	 * @param username - The username of the user.
	 * @param password - The password of the user.
	 * @param requestToken - The request token obtained from the createRequestToken method.
	 * @returns A promise that resolves to the response containing the session ID details.
	 */
	async createSessionWithLogin(
		requestToken: string,
		username: string,
		password: string
	): Promise<AuthenticationCreateSessionWithLoginResponse> {
		return this.apiInstance.POST<AuthenticationCreateSessionWithLoginResponse>(
			'authentication/token/validate_with_login',
			{
				username: username,
				password: password,
				request_token: requestToken
			}
		);
	}

	/**
	 * Deletes a session. This will invalidate the session ID and require a new session to be created.
	 * @param sessionId - The ID of the session to delete.
	 * @returns A promise that resolves to the response confirming the session deletion.
	 */
	async deleteSession(sessionId: string) {
		return this.apiInstance.DELETE(`authentication/session?session_id=${sessionId}`);
	}

	/**
	 * Validates the API key used for authentication.
	 * @returns A promise that resolves to the response containing the key validation details.
	 */
	async validateKey(): Promise<POST> {
		return this.apiInstance.GET<POST>('authentication');
	}
}
