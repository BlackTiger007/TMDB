import { describe, it, expect } from 'vitest';

// CommonJS import in TypeScript: require wird benötigt
const releaseConfig = require('../../release.config.cjs');

describe('Semantic Release Config', () => {
	it('should have branches defined', () => {
		expect(releaseConfig.branches).toBeDefined();
		expect(Array.isArray(releaseConfig.branches)).toBe(true);
		expect(releaseConfig.branches).toContain('main');
	});

	it('should have plugins defined', () => {
		expect(releaseConfig.plugins).toBeDefined();
		expect(Array.isArray(releaseConfig.plugins)).toBe(true);

		// Prüfe, ob bestimmte Plugins vorhanden sind
		const pluginNames = releaseConfig.plugins.map((p: any) => (typeof p === 'string' ? p : p[0]));
		expect(pluginNames).toContain('@semantic-release/npm');
		expect(pluginNames).toContain('@semantic-release/github');
	});

	it('git plugin should have correct assets and message', () => {
		const gitPlugin = releaseConfig.plugins.find(
			(p: any) => Array.isArray(p) && p[0] === '@semantic-release/git'
		);
		expect(gitPlugin).toBeDefined();
		const options = gitPlugin[1];
		expect(options.assets).toEqual(['package.json', 'package-lock.json', 'CHANGELOG.md']);
		expect(options.message).toContain('chore(release): ${nextRelease.version}');
	});
});
