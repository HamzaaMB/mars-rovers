/**
 * Parses plateau dimensions from a string.
 * @param {string} line - String containing plateau dimensions.
 * @returns {number[]} Array with two integers representing maximum x and y coordinates of the plateau.
 * @throws {Error} Throws error if dimensions are invalid.
 */
export function parsePlateauDimensions(line: string): number[] {
  const dimensions = line.trim().split(' ').map(Number);
  
  if (dimensions.length !== 2 || dimensions.some(isNaN)) {
    throw new Error('Invalid plateau dimensions');
  }
  
  return dimensions;
}

/**
 * Parses rover's position and direction from a string.
 * @param {string} line - String containing rover's position and direction.
 * @returns {[number, number, string]} Array with x-coordinate, y-coordinate, and direction ('N', 'E', 'S', 'W').
 * @throws {Error} Throws error if position or direction are invalid.
 */
export function parseRoverPosition(line: string): [number, number, string] {
  const [x, y, direction] = line.trim().split(' ');
  const parsedX = parseInt(x);
  const parsedY = parseInt(y);

  if (isNaN(parsedX) || isNaN(parsedY) || !['N', 'E', 'S', 'W'].includes(direction)) {
    throw new Error('Invalid rover position');
  }

  return [parsedX, parsedY, direction];
}

/**
 * Parses commands string for rover's movements.
 * @param {string} line - String containing commands ('L', 'R', 'M').
 * @returns {string} Parsed commands string.
 */
export function parseCommands(line: string): string {
  return line.trim();
}