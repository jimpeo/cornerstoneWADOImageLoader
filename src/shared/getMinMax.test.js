import getMinMax from './getMinMax.js';

describe('#getMinMax', () => {
  it('should return the right min and max values', () => {
    const result = getMinMax([7, 3, 9, 6, 8, 1, 4, 5, 2]);

    expect(result.min).toEqual(1);
    expect(result.max).toEqual(9);
  });
});
