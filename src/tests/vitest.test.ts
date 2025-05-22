import { expect, test } from 'vitest';
import config from '../../vitest.config';

test('Vitest Config sollte dir und include enthalten', () => {
	expect(config.test).toBeDefined();
	if (config.test) {
		expect(config.test.dir).toBe('./src/tests');
		expect(config.test.include).toContain('**/*.test.ts');
	}
});
