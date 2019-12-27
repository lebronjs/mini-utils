import { verify } from '../src';

describe('utils-verify', () => {
    test('isArrayLike([]): true', () => {
        expect(verify.isArrayLike([])).toBe(true);
    });

    test('isArrayLike({}): false', () => {
        expect(verify.isArrayLike({})).toBe(false);
    });
});
