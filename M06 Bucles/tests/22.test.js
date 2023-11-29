const diasEnMes = require('../ejercicios/22');

describe('diasEnMes', () => {
  it('should return 31 for January', () => {
    expect(diasEnMes(1)).toBe(31);
  });

  it('should return 28 for February', () => {
    expect(diasEnMes(2)).toBe(28);
  });

  it('should return 30 for April', () => {
    expect(diasEnMes(4)).toBe(30);
  });

  it('should return 0 for month outside of range', () => {
    expect(diasEnMes(13)).toBe(0);
  });

  it('should return 0 for month outside of range', () => {
    expect(diasEnMes(-1)).toBe(0);
  });
});
