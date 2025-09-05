import { expect, test } from 'vitest';
import config from '../../tsup.config';

test('Tsup Config sollte dts und shims enthalten', () => {
	expect(config).toBeDefined();
	if (config) {
		// @ts-expect-error
		expect(config.dts).toBe(true);
		// @ts-expect-error
		expect(config.shims).toBe(true);
	}
});
