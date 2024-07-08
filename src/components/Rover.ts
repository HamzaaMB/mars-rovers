import { parsePlateauDimensions, parseCommands, parseRoverPosition } from "../helpers/helpers"

/**
 * Represents a Mars Rover that can move and turn on a plateau.
 */
export default class Rover {
  private x: number
  private y: number
  private direction: string

  /**
   * Creates an instance of Rover.
   * @param {number} x - Initial x-coordinate.
   * @param {number} y - Initial y-coordinate.
   * @param {string} direction - Initial direction ('N', 'E', 'S', 'W').
   */
  constructor(x: number, y: number, direction: string) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  /**
   * Turns the rover 90 degrees to the left.
   */
  turnLeft() {
    const directions = ['N', 'W', 'S', 'E']
    let index = directions.indexOf(this.direction)
    this.direction = directions[(index + 1) % 4]
  }

  /**
   * Turns the rover 90 degrees to the right.
   */
  turnRight() {
    const directions = ['N', 'E', 'S', 'W']
    let index = directions.indexOf(this.direction)
    this.direction = directions[(index + 1) % 4]
  }

  /**
   * Moves the rover one grid point forward.
   */
  move() {
    switch (this.direction) {
      case 'N': this.y += 1; break
      case 'E': this.x += 1; break
      case 'S': this.y -= 1; break
      case 'W': this.x -= 1; break
    }
  }

  /**
   * Executes commands ('L', 'R', 'M').
   * @param {string} commands - String of commands.
   * @throws {Error} Throws if an invalid command is encountered.
   */
  executeCommands(commands: string) {
    for (let command of commands) {
      switch (command) {
        case 'L': this.turnLeft(); break
        case 'R': this.turnRight(); break
        case 'M': this.move(); break
        default: throw new Error(`Invalid command: ${command}`)
      }
    }
  }

  /**
   * Returns the rover's current position and direction.
   * @returns {string} Current position and direction formatted as 'x y direction'.
   */
  getPosition() {
    return `${this.x} ${this.y} ${this.direction}`
  }
}

/**
 * Simulates multiple Mars rovers exploring a plateau.
 * @param {string} input - Input string with plateau dimensions, rover initial positions, and commands.
 * @returns {string} Final positions of all rovers after executing commands.
 * @throws {Error} Throws if input format is invalid or parsing fails.
 */
function moveRover(input: string): string {
  const lines = input.trim().split('\n')

  if (lines.length < 3 || lines.length % 2 !== 1) {
    throw new Error('Invalid input format. Expected plateau dimensions followed by rover position and commands pairs.')
  }

  const rovers = []

  /* Parse plateau dimensions */
  const [maxX, maxY] = parsePlateauDimensions(lines[0])

  /* Process each rover's position and commands */
  for (let i = 1; i < lines.length; i += 2) {
    const [x, y, direction] = parseRoverPosition(lines[i])
    const commands = parseCommands(lines[i + 1])

    const rover = new Rover(x, y, direction)
    rover.executeCommands(commands)
    rovers.push(rover.getPosition())
  }

  return rovers.join('\n')
}

export { Rover, moveRover }
