export type CreateGuestSessionResponse = {
	success: boolean;
	guest_session_id: string;
	expires_at: string;
};

export type CreateRequestTokenResponse = CreateGuestSessionResponse;

export type CreateSessionResponse = {
	success: boolean;
	session_id: string;
};

export type CreateSessionFromV4TokenResponse = CreateSessionResponse;

export type CreateSessionWithLoginResponse = {
	success: boolean;
	expires_at: string;
	request_token: string;
};
