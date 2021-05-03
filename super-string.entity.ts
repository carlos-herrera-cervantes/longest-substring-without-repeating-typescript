export interface ISolution {
  str: string,
  length: number
}

export class SuperString extends String {

  constructor(private str: string) {
    super(str);
  }

  /**
   * Calculates the length of substring
   * @returns ISolution interface
   */
  getLengthOfLongSubtring(): ISolution {
    let maxLength = 0;
    let currentLength = 0;
    let leftSide = -1;
    let index = 0;
    
    const hashTable = {} as any;
    const strLength = this.str.length;

    for (const char of this.str) {
      if (char in hashTable && leftSide < hashTable[char]) {
        leftSide = hashTable[char];
      }

      currentLength = index - leftSide;

      if (currentLength > maxLength) {
        maxLength = currentLength;
      }

      hashTable[char] = index;
      index++;
    }

    currentLength = strLength - leftSide - 1;

    if (currentLength > maxLength) {
      maxLength = currentLength;
    }

    let concatenated: string = '';

    for (const property in hashTable) {
      concatenated += property;
    }

    return { str: concatenated, length: maxLength } as ISolution;
  }

}