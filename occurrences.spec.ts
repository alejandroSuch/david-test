import { occurrences } from "./occurrences";

describe('occurrences', () => {
  it('should return zero when str2 is longer than str1', () => {
    expect(occurrences('c', 'a cat in a hat')).toEqual(0)
  });

  it('should get no occurrences (more than one letters)', () => {
    expect(occurrences('a cat in a hat', 'hair')).toEqual(0);
  });

  it('should get no occurrences (one letter)', () => {
    expect(occurrences('a cat in a hat', 'y')).toEqual(0);
  });

  it('should get one occurrence (one letter)', () => {
    expect(occurrences('a cat in a hat', 'c')).toEqual(1);
  });

  it('should get four occurrences (one letter)', () => {
    expect(occurrences('a cat in a hat', 'a')).toEqual(4);
  });

  it('should get one occurrence (one word)', () => {
    expect(occurrences('a cat in a hat', 'cat')).toEqual(1);
  });

  it('should get two occurrences (partial)', () => {
    expect(occurrences('a cat in a hat', 'at')).toEqual(2);
  });
});
