import { SuperString, ISolution } from './super-string.entity';

describe('Testing SuperString class', () => {
    it('Should return abc and length of 3', () => {
        const str: string = 'abcabcbb';
        const mySuperString = new SuperString(str);

        const iSolution: ISolution = mySuperString.getLengthOfLongSubtring();

        expect(iSolution).toEqual({ str: 'abc', length: 3 });
    });
});