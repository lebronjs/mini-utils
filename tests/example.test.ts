import { verify } from '../src';
import { timeDifference } from '../src';

describe('utils-verify', () => {
    test('isArrayLike([]): true', () => {
        expect(verify.isArrayLike([])).toBe(true);
    });

    test('isArrayLike({}): false', () => {
        expect(verify.isArrayLike({})).toBe(false);
    });

    test('timeDifference(2020-6-11 23:14:24, 2020-6-12 23:15:25)', () => {
        expect(timeDifference(1591888464000, 1591974925000)).toStrictEqual({ days: 1, hours: 0, minutes: 1, seconds: 1 });
    });

    test('timeDifference(2020-6-11 23:14:24, 2019-6-12 23:15:25)', () => {
        expect(timeDifference(1591888464000, 1560352502000)).toStrictEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    });
});
