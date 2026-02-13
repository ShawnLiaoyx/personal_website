import { describe, expect, it } from 'vitest';
import { formatDate, uniqueValues } from '../../src/utils/content';

describe('content utils', () => {
	it('returns unique sorted values', () => {
		expect(uniqueValues(['b', 'a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
	});

	it('formats date for US locale', () => {
		const output = formatDate(new Date('2025-05-10T00:00:00.000Z'));
		expect(output).toMatch(/2025/);
	});
});
