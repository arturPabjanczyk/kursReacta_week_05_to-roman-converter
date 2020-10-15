import {toRoman} from "../../lib/converters"

describe('toRoman()', () => {
    it('should not convert 0 to any roman number', function () {
        expect(toRoman(0)).toEqual("none")
    });
    xit('should convert 2019 to MMXIX', function () {
        expect(toRoman(2019)).toEqual("MMXIX")
    });
});
describe('toRoman()', () => {
    it.each([
        [1, "I"],
        [5, "V"]
    ])('should  convert %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
})