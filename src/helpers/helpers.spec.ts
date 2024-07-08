import { parsePlateauDimensions, parseCommands, parseRoverPosition } from "./helpers";

describe('parsePlateauDimensions', () => {
  test('parses valid plateau dimensions', () => {
    const result = parsePlateauDimensions('5 5');
    expect(result).toEqual([5, 5]);
  });

  test('throws error on invalid plateau dimensions format', () => {
    expect(() => {
      parsePlateauDimensions('5 A');
    }).toThrow('Invalid plateau dimensions');

    expect(() => {
      parsePlateauDimensions('5');
    }).toThrow('Invalid plateau dimensions');

    expect(() => {
      parsePlateauDimensions('5 5 5');
    }).toThrow('Invalid plateau dimensions');
  });

  test('throws error on non-numeric plateau dimensions', () => {
    expect(() => {
      parsePlateauDimensions('5 B');
    }).toThrow('Invalid plateau dimensions');
  });
});

describe('parseCommands', () => {
  test('parses valid commands', () => {
    const result = parseCommands('LMLMLMLMM');
    expect(result).toBe('LMLMLMLMM');
  });

  test('trims the commands string', () => {
    const result = parseCommands('   LMLMLMLMM   ');
    expect(result).toBe('LMLMLMLMM');
  });
});