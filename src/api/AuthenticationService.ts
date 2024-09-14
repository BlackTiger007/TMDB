import { api } from '.';
import { POST } from '../types';
import {
	CreateGuestSessionResponse,
	CreateRequestTokenResponse,
	CreateSessionResponse,
	CreateSessionFromV4TokenResponse,
	CreateSessionWithLoginResponse
} from '../types/authentication';

export class AuthenticationService {
	private apiInstance: api;

	/**
	 * Initializes the AuthenticationService with the provided API instance.
	 * @param apiInstance - An instance of the API handler.
	 */
	constructor(apiInstance: api) {
		this.apiInstance = apiInstance;
	}

	/**
	 * Creates a guest session. Guest sessions allow users to perform actions like maintaining a rated list, a watchlist, and a favorite list. Guest sessions will expire if not used within 60 minutes.
	 * @returns A promise that resolves to the response containing the guest session details.
	 */
	async createGuestSession(): Promise<CreateGuestSessionResponse> {
		return this.apiInstance.POST<CreateGuestSessionResponse>(
			'authentication/guest_session/new',
			{}
		);
	}

	/**
	 * Creates a request token used to validate a TMDB user login. This is the first step in generating a session ID.
	 * @returns A promise that resolves to the response containing the request token details.
	 */
	async createRequestToken(): Promise<CreateRequestTokenResponse> {
		return this.apiInstance.GET<CreateRequestTokenResponse>('authentication/token/new');
	}

	/**
	 * Creates a session ID once a user has validated the request token. This is the third step in generating a session ID.
	 * @param requestToken - The request token obtained from the createRequestToken method.
	 * @returns A promise that resolves to the response containing the session ID details.
	 */
	async createSession(requestToken: string): Promise<CreateSessionResponse> {
		return this.apiInstance.POST<CreateSessionResponse>('authentication/session/new', {
			request_token: requestToken
		});
	}

	/**
	 * Creates a session ID from a valid v4 access token. This replaces the third step of generating a session ID if you already have a v4 token.
	 * @param v4Token - The v4 access token obtained from user authentication.
	 * @returns A promise that resolves to the response containing the session ID details.
	 */
	async createSessionFromV4Token(v4Token: string): Promise<CreateSessionFromV4TokenResponse> {
		return this.apiInstance.POST<CreateSessionFromV4TokenResponse>(
			'authentication/session/convert/4',
			{ access_token: v4Token }
		);
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
	): Promise<CreateSessionWithLoginResponse> {
		return this.apiInstance.POST<CreateSessionWithLoginResponse>(
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
