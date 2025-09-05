import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		dir: './src/tests', // Test-Dateien liegen in diesem Ordner
		include: ['**/*.test.ts', '**/*.spec.ts'], // Nur Dateien mit .test.ts oder .spec.ts
		globals: true, // Ermöglicht globale Test-APIs (z. B. describe, it ohne Import)
		environment: 'node', // Testumgebung (Node oder jsdom für Browser)
		coverage: {
			provider: 'v8', // Für Code Coverage
			reporter: ['text', 'lcov'], // Ausgabeformate (Text im Terminal + lcov für Tools)
			exclude: ['tests/**', 'node_modules/**'] // Dateien ausschließen vom Coverage-Report
		},
		watch: false // Automatisches Test-Watchen ausschalten (für CI sinnvoll)
	}
});
