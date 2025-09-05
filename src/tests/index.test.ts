import TMDB from '..';
import dotenv from 'dotenv';
import { describe, it, expect } from 'vitest';

dotenv.config();

if (!process.env.API_KEY) {
	throw new Error('API_KEY is not defined');
}

export const tmdb = new TMDB(process.env.API_KEY, 'de');

describe('TMDB Client', () => {
	it('should have API_KEY in environment', () => {
		expect(process.env.API_KEY).toBeDefined();
		expect(typeof process.env.API_KEY).toBe('string');
	});

	it('should initialize TMDB instance', () => {
		expect(tmdb).toBeDefined();
		expect(typeof tmdb).toBe('object');
	});

	it('should have collections module with details function', () => {
		expect(tmdb.collections).toBeDefined();
		expect(typeof tmdb.collections.details).toBe('function');
	});
});
