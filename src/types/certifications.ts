type Certification = {
	certification: string;
	meaning: string;
	order: number;
};

export type CertificationsResponse = {
	certifications: {
		[countryCode: string]: Certification[];
	};
};
