export interface DELETE {
	success: boolean;
}

export interface POST {
	/** The status code returned by the API */
	status_code:
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
		| 21
		| 22
		| 23
		| 24
		| 25
		| 26
		| 27
		| 28
		| 29
		| 30
		| 31
		| 32
		| 33
		| 34
		| 35
		| 36
		| 37
		| 38
		| 39
		| 40
		| 41
		| 42
		| 43
		| 44
		| 45
		| 46
		| 47;

	/** The message corresponding to the status code */
	status_message:
		| 'Success.'
		| 'Invalid service: this service does not exist.'
		| 'Authentication failed: You do not have permissions to access the service.'
		| "Invalid format: This service doesn't exist in that format."
		| 'Invalid parameters: Your request parameters are incorrect.'
		| 'Invalid id: The pre-requisite id is invalid or not found.'
		| 'Invalid API key: You must be granted a valid key.'
		| 'Duplicate entry: The data you tried to submit already exists.'
		| 'Service offline: This service is temporarily offline, try again later.'
		| 'Suspended API key: Access to your account has been suspended, contact TMDB.'
		| 'Internal error: Something went wrong, contact TMDB.'
		| 'The item/record was updated successfully.'
		| 'The item/record was deleted successfully.'
		| 'Authentication failed.'
		| 'Failed.'
		| 'Device denied.'
		| 'Session denied.'
		| 'Validation failed.'
		| 'Invalid accept header.'
		| 'Invalid date range: Should be a range no longer than 14 days.'
		| 'Entry not found: The item you are trying to edit cannot be found.'
		| 'Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.'
		| 'Invalid date: Format needs to be YYYY-MM-DD.'
		| 'Your request to the backend server timed out. Try again.'
		| 'Your request count (#) is over the allowed limit of (40).'
		| 'You must provide a username and password.'
		| 'Too many append to response objects: The maximum number of remote calls is 20.'
		| 'Invalid timezone: Please consult the documentation for a valid timezone.'
		| 'You must confirm this action: Please provide a confirm=true parameter.'
		| 'Invalid username and/or password: You did not provide a valid login.'
		| 'Account disabled: Your account is no longer active. Contact TMDB if this is an error.'
		| 'Email not verified: Your email address has not been verified.'
		| 'Invalid request token: The request token is either expired or invalid.'
		| 'The resource you requested could not be found.'
		| 'Invalid token.'
		| "This token hasn't been granted write permission by the user."
		| 'The requested session could not be found.'
		| "You don't have permission to edit this resource."
		| 'This resource is private.'
		| 'Nothing to update.'
		| "This request token hasn't been approved by the user."
		| 'This request method is not supported for this resource.'
		| "Couldn't connect to the backend server."
		| 'The ID is invalid.'
		| 'This user has been suspended.'
		| 'The API is undergoing maintenance. Try again later.'
		| 'The input is not valid.';

	/** Whether the request was successful or not */
	success: boolean;
}
