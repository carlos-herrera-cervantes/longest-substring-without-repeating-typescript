import { SuperString, ISolution } from './super-string.entity';

function main() {
  const str: string = 'abcabcbb';
  const mySuperString = new SuperString(str);
  const iSolution: ISolution = mySuperString.getLengthOfLongSubtring();

  console.info(`The length of substring for ${str}` +
  ` is ${iSolution.length} - ${iSolution.str}`
  );
}

main();